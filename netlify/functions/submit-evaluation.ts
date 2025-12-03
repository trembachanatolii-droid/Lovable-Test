import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

// Email and SMS service configuration
const FIRM_EMAIL = "infotrade@trembachlaw.com";
const FIRM_NAME = "Trembach Law Firm";
const FIRM_PHONE = "(310) 744-1328";

interface EvaluationFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Send email via Resend
async function sendEmail(
  to: string,
  subject: string,
  html: string,
  replyTo?: string
): Promise<boolean> {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY not configured");
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${FIRM_NAME} <noreply@${process.env.EMAIL_DOMAIN || "trembachlaw.com"}>`,
        to: [to],
        subject: subject,
        html: html,
        reply_to: replyTo,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend API error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Email send error:", error);
    return false;
  }
}

// Get RingCentral access token using JWT
async function getRingCentralToken(): Promise<string | null> {
  const RC_CLIENT_ID = process.env.RINGCENTRAL_CLIENT_ID;
  const RC_CLIENT_SECRET = process.env.RINGCENTRAL_CLIENT_SECRET;
  const RC_JWT_TOKEN = process.env.RINGCENTRAL_JWT_TOKEN;
  const RC_SERVER_URL = process.env.RINGCENTRAL_SERVER_URL || "https://platform.ringcentral.com";

  if (!RC_CLIENT_ID || !RC_CLIENT_SECRET || !RC_JWT_TOKEN) {
    console.error("RingCentral credentials not configured");
    return null;
  }

  try {
    const response = await fetch(`${RC_SERVER_URL}/restapi/oauth/token`, {
      method: "POST",
      headers: {
        "Authorization": "Basic " + Buffer.from(`${RC_CLIENT_ID}:${RC_CLIENT_SECRET}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: RC_JWT_TOKEN,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("RingCentral auth error:", error);
      return null;
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("RingCentral token error:", error);
    return null;
  }
}

// Send SMS via RingCentral
async function sendSMS(to: string, message: string): Promise<boolean> {
  const RC_SERVER_URL = process.env.RINGCENTRAL_SERVER_URL || "https://platform.ringcentral.com";
  const RC_PHONE_NUMBER = process.env.RINGCENTRAL_PHONE_NUMBER;

  if (!RC_PHONE_NUMBER) {
    console.error("RingCentral phone number not configured");
    return false;
  }

  const accessToken = await getRingCentralToken();
  if (!accessToken) {
    return false;
  }

  // Clean phone number - remove non-digits and add +1 if needed
  let cleanPhone = to.replace(/\D/g, "");
  if (cleanPhone.length === 10) {
    cleanPhone = "+1" + cleanPhone;
  } else if (!cleanPhone.startsWith("+")) {
    cleanPhone = "+" + cleanPhone;
  }

  try {
    const response = await fetch(
      `${RC_SERVER_URL}/restapi/v1.0/account/~/extension/~/sms`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: { phoneNumber: RC_PHONE_NUMBER },
          to: [{ phoneNumber: cleanPhone }],
          text: message,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("RingCentral SMS error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("SMS send error:", error);
    return false;
  }
}

// Generate firm notification email
function generateFirmNotificationEmail(data: EvaluationFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Case Evaluation Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <tr>
      <td style="background-color: #012169; padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">New Case Evaluation Request</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px;">
        <div style="background-color: #e8f4f8; border-left: 4px solid #0d9488; padding: 15px; margin-bottom: 25px;">
          <p style="margin: 0; color: #012169; font-weight: bold;">A new case evaluation has been submitted via the website.</p>
        </div>

        <h2 style="color: #012169; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">Contact Information</h2>
        <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 25px;">
          <tr>
            <td style="color: #666; width: 140px; vertical-align: top;"><strong>Name:</strong></td>
            <td style="color: #333;">${data.firstName} ${data.lastName}</td>
          </tr>
          <tr>
            <td style="color: #666; vertical-align: top;"><strong>Company:</strong></td>
            <td style="color: #333;">${data.company}</td>
          </tr>
          <tr>
            <td style="color: #666; vertical-align: top;"><strong>Email:</strong></td>
            <td style="color: #333;"><a href="mailto:${data.email}" style="color: #0d9488;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="color: #666; vertical-align: top;"><strong>Phone:</strong></td>
            <td style="color: #333;"><a href="tel:${data.phone}" style="color: #0d9488;">${data.phone}</a></td>
          </tr>
        </table>

        <h2 style="color: #012169; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">Case Details</h2>
        <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 25px;">
          <tr>
            <td style="color: #666; width: 140px; vertical-align: top;"><strong>Subject Area:</strong></td>
            <td style="color: #333;">${data.subject}</td>
          </tr>
          <tr>
            <td style="color: #666; vertical-align: top;"><strong>Case Description:</strong></td>
            <td style="color: #333; white-space: pre-wrap;">${data.message}</td>
          </tr>
        </table>

        <div style="background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 4px; padding: 15px; margin-top: 20px;">
          <p style="margin: 0; color: #92400e; font-size: 14px;"><strong>Action Required:</strong> Please respond to this inquiry within 24 hours.</p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #012169; padding: 20px; text-align: center;">
        <p style="color: #ffffff; margin: 0; font-size: 12px;">This email was automatically generated from the Trembach Law Firm website.</p>
        <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 11px;">Submitted on ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PT</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

// Generate client confirmation email
function generateClientConfirmationEmail(data: EvaluationFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Trembach Law Firm</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <tr>
      <td style="background-color: #012169; padding: 40px 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0 0 10px 0; font-size: 28px; font-weight: bold;">Trembach Law Firm</h1>
        <p style="color: #0d9488; margin: 0; font-size: 14px; letter-spacing: 1px;">INTERNATIONAL TRADE & CUSTOMS LAW</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 40px 30px;">
        <h2 style="color: #012169; font-size: 22px; margin: 0 0 20px 0;">Thank You, ${data.firstName}</h2>

        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          We have received your case evaluation request and appreciate you considering Trembach Law Firm for your legal needs.
        </p>

        <div style="background-color: #e8f4f8; border-radius: 8px; padding: 25px; margin: 25px 0;">
          <h3 style="color: #012169; margin: 0 0 15px 0; font-size: 16px;">What Happens Next?</h3>
          <ul style="color: #333; margin: 0; padding-left: 20px; line-height: 1.8;">
            <li>Our attorneys will review your inquiry within 24 hours</li>
            <li>A member of our team will contact you to discuss your matter</li>
            <li>If urgent, please call us directly at <strong>${FIRM_PHONE}</strong></li>
          </ul>
        </div>

        <h3 style="color: #012169; font-size: 16px; margin: 25px 0 15px 0;">Your Submission Summary:</h3>
        <table width="100%" cellpadding="10" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px;">
          <tr>
            <td style="color: #666; width: 120px; border-bottom: 1px solid #e5e5e5;"><strong>Subject:</strong></td>
            <td style="color: #333; border-bottom: 1px solid #e5e5e5;">${data.subject}</td>
          </tr>
          <tr>
            <td style="color: #666;"><strong>Submitted:</strong></td>
            <td style="color: #333;">${new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
          </tr>
        </table>

        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-top: 25px;">
          All information you have provided is kept strictly confidential. This inquiry does not establish an attorney-client relationship until we have formally agreed to represent you.
        </p>

        <div style="text-align: center; margin-top: 30px;">
          <a href="tel:+13107441328" style="display: inline-block; background-color: #0d9488; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: bold; font-size: 16px;">Call Us: ${FIRM_PHONE}</a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #012169; padding: 30px; text-align: center;">
        <p style="color: #ffffff; margin: 0 0 10px 0; font-size: 14px; font-weight: bold;">Trembach Law Firm</p>
        <p style="color: #9ca3af; margin: 0; font-size: 12px; line-height: 1.6;">
          27001 Agoura Road, Suite 350<br>
          Calabasas, CA 91301<br>
          <a href="mailto:${FIRM_EMAIL}" style="color: #0d9488;">${FIRM_EMAIL}</a> | ${FIRM_PHONE}
        </p>
        <p style="color: #6b7280; margin: 15px 0 0 0; font-size: 11px;">
          This is an automated message. Please do not reply directly to this email.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

// Generate SMS confirmation message
function generateClientSMS(firstName: string): string {
  return `Thank you for contacting Trembach Law Firm. We have received your case evaluation request and will contact you within 24 hours. For urgent matters, call us at ${FIRM_PHONE}. - Trembach Law`;
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "https://trembach.law",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse form data
    const data: EvaluationFormData = JSON.parse(event.body || "{}");

    // Validate required fields
    const requiredFields = ["firstName", "lastName", "company", "email", "phone", "subject", "message"];
    for (const field of requiredFields) {
      if (!data[field as keyof EvaluationFormData]) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: `Missing required field: ${field}` }),
        };
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid email address" }),
      };
    }

    // Send notifications in parallel
    const [firmEmailResult, clientEmailResult, smsResult] = await Promise.allSettled([
      // Send email to firm
      sendEmail(
        FIRM_EMAIL,
        `New Case Evaluation: ${data.subject}`,
        generateFirmNotificationEmail(data),
        data.email
      ),
      // Send confirmation email to client
      sendEmail(
        data.email,
        "Thank You for Contacting Trembach Law Firm",
        generateClientConfirmationEmail(data)
      ),
      // Send SMS confirmation to client
      sendSMS(data.phone, generateClientSMS(data.firstName)),
    ]);

    // Log results
    console.log("Firm email:", firmEmailResult);
    console.log("Client email:", clientEmailResult);
    console.log("SMS:", smsResult);

    // Check if at least the firm email was sent
    const firmEmailSent = firmEmailResult.status === "fulfilled" && firmEmailResult.value;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Your case evaluation request has been submitted successfully.",
        notifications: {
          firmEmail: firmEmailResult.status === "fulfilled" && firmEmailResult.value,
          clientEmail: clientEmailResult.status === "fulfilled" && clientEmailResult.value,
          sms: smsResult.status === "fulfilled" && smsResult.value,
        },
      }),
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "An error occurred processing your request. Please try again." }),
    };
  }
};

export { handler };
