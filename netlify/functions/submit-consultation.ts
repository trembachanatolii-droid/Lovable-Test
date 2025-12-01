import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

// Email and SMS service configuration
const FIRM_EMAIL = "infotrade@trembachlaw.com";
const FIRM_NAME = "Trembach Law Firm";
const FIRM_PHONE = "(310) 744-1328";

interface ConsultationFormData {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle?: string;
  email: string;
  phone: string;
  practiceArea: string;
  caseDescription: string;
  consultationType: string;
  timezone: string;
  preferredDate: string;
  preferredTime: string;
  alternateDate?: string;
  alternateTime?: string;
  referralSource?: string;
  additionalNotes?: string;
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

// Format consultation type for display
function formatConsultationType(type: string): string {
  const types: Record<string, string> = {
    phone: "Phone Call",
    video: "Video Conference (Zoom/Teams)",
    "in-person": "In-Person Meeting",
  };
  return types[type] || type;
}

// Format timezone for display
function formatTimezone(tz: string): string {
  const zones: Record<string, string> = {
    "America/Los_Angeles": "Pacific Time (PT)",
    "America/Denver": "Mountain Time (MT)",
    "America/Chicago": "Central Time (CT)",
    "America/New_York": "Eastern Time (ET)",
    "America/Anchorage": "Alaska Time (AKT)",
    "Pacific/Honolulu": "Hawaii Time (HT)",
    "Europe/London": "GMT/BST (London)",
    "Europe/Paris": "CET (Paris)",
    "Asia/Tokyo": "JST (Tokyo)",
    "Asia/Shanghai": "CST (Shanghai)",
    "Asia/Hong_Kong": "HKT (Hong Kong)",
  };
  return zones[tz] || tz;
}

// Format date for display
function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Generate firm notification email
function generateFirmNotificationEmail(data: ConsultationFormData): string {
  const alternateSection = data.alternateDate && data.alternateTime ? `
          <tr>
            <td style="color: #666; vertical-align: top;"><strong>Alternate:</strong></td>
            <td style="color: #333;">${formatDate(data.alternateDate)} at ${data.alternateTime}</td>
          </tr>` : "";

  const referralSection = data.referralSource ? `
          <tr>
            <td style="color: #666; vertical-align: top;"><strong>Referral Source:</strong></td>
            <td style="color: #333;">${data.referralSource}</td>
          </tr>` : "";

  const notesSection = data.additionalNotes ? `
        <h2 style="color: #012169; font-size: 18px; margin: 25px 0 15px 0; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">Additional Notes</h2>
        <p style="color: #333; background-color: #f9fafb; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${data.additionalNotes}</p>` : "";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Consultation Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <tr>
      <td style="background-color: #012169; padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">New Consultation Request</h1>
        <p style="color: #0d9488; margin: 10px 0 0 0; font-size: 14px;">Scheduling Request Received</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px;">
        <div style="background-color: #dcfce7; border-left: 4px solid #22c55e; padding: 15px; margin-bottom: 25px;">
          <p style="margin: 0; color: #166534; font-weight: bold;">A prospective client has requested a consultation appointment.</p>
        </div>

        <h2 style="color: #012169; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">Contact Information</h2>
        <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 25px;">
          <tr>
            <td style="color: #666; width: 140px; vertical-align: top;"><strong>Name:</strong></td>
            <td style="color: #333;">${data.firstName} ${data.lastName}</td>
          </tr>
          <tr>
            <td style="color: #666; vertical-align: top;"><strong>Company:</strong></td>
            <td style="color: #333;">${data.company}${data.jobTitle ? ` (${data.jobTitle})` : ""}</td>
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

        <h2 style="color: #012169; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">Requested Appointment</h2>
        <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 25px; background-color: #fef3c7; border-radius: 6px;">
          <tr>
            <td style="color: #92400e; width: 140px; vertical-align: top;"><strong>Preferred:</strong></td>
            <td style="color: #78350f; font-weight: bold;">${formatDate(data.preferredDate)} at ${data.preferredTime}</td>
          </tr>${alternateSection}
          <tr>
            <td style="color: #92400e; vertical-align: top;"><strong>Format:</strong></td>
            <td style="color: #78350f;">${formatConsultationType(data.consultationType)}</td>
          </tr>
          <tr>
            <td style="color: #92400e; vertical-align: top;"><strong>Timezone:</strong></td>
            <td style="color: #78350f;">${formatTimezone(data.timezone)}</td>
          </tr>
        </table>

        <h2 style="color: #012169; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">Case Information</h2>
        <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 25px;">
          <tr>
            <td style="color: #666; width: 140px; vertical-align: top;"><strong>Practice Area:</strong></td>
            <td style="color: #333;">${data.practiceArea}</td>
          </tr>${referralSection}
        </table>
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; margin-bottom: 25px;">
          <p style="color: #666; margin: 0 0 5px 0; font-size: 14px;"><strong>Case Description:</strong></p>
          <p style="color: #333; margin: 0; white-space: pre-wrap;">${data.caseDescription}</p>
        </div>
        ${notesSection}

        <div style="background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 4px; padding: 15px; margin-top: 20px;">
          <p style="margin: 0; color: #92400e; font-size: 14px;"><strong>Action Required:</strong> Please confirm or propose alternative times within 24 hours.</p>
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
function generateClientConfirmationEmail(data: ConsultationFormData): string {
  const alternateSection = data.alternateDate && data.alternateTime ? `
          <tr>
            <td style="color: #666; border-bottom: 1px solid #e5e5e5;"><strong>Alternate:</strong></td>
            <td style="color: #333; border-bottom: 1px solid #e5e5e5;">${formatDate(data.alternateDate)} at ${data.alternateTime}</td>
          </tr>` : "";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consultation Request Received - Trembach Law Firm</title>
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
        <h2 style="color: #012169; font-size: 22px; margin: 0 0 20px 0;">Consultation Request Received</h2>

        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Dear ${data.firstName},
        </p>

        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Thank you for scheduling a consultation with Trembach Law Firm. We have received your request and are reviewing the details you provided.
        </p>

        <div style="background-color: #e8f4f8; border-radius: 8px; padding: 25px; margin: 25px 0;">
          <h3 style="color: #012169; margin: 0 0 15px 0; font-size: 16px;">Your Requested Appointment</h3>
          <table width="100%" cellpadding="10" cellspacing="0">
            <tr>
              <td style="color: #666; width: 130px; border-bottom: 1px solid #e5e5e5;"><strong>Preferred Date:</strong></td>
              <td style="color: #012169; font-weight: bold; border-bottom: 1px solid #e5e5e5;">${formatDate(data.preferredDate)}</td>
            </tr>
            <tr>
              <td style="color: #666; border-bottom: 1px solid #e5e5e5;"><strong>Preferred Time:</strong></td>
              <td style="color: #012169; font-weight: bold; border-bottom: 1px solid #e5e5e5;">${data.preferredTime} (${formatTimezone(data.timezone)})</td>
            </tr>${alternateSection}
            <tr>
              <td style="color: #666;"><strong>Format:</strong></td>
              <td style="color: #333;">${formatConsultationType(data.consultationType)}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #fef3c7; border-radius: 8px; padding: 20px; margin: 25px 0;">
          <h3 style="color: #92400e; margin: 0 0 10px 0; font-size: 15px;">What Happens Next?</h3>
          <ul style="color: #78350f; margin: 0; padding-left: 20px; line-height: 1.8; font-size: 14px;">
            <li>We will confirm your appointment via email within 24 hours</li>
            <li>If your preferred time is unavailable, we will propose alternatives</li>
            <li>You will receive a calendar invitation once confirmed</li>
            <li>For urgent matters, please call us directly</li>
          </ul>
        </div>

        <h3 style="color: #012169; font-size: 16px; margin: 25px 0 15px 0;">Matter Summary:</h3>
        <table width="100%" cellpadding="10" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px;">
          <tr>
            <td style="color: #666; width: 120px; border-bottom: 1px solid #e5e5e5;"><strong>Area:</strong></td>
            <td style="color: #333; border-bottom: 1px solid #e5e5e5;">${data.practiceArea}</td>
          </tr>
          <tr>
            <td style="color: #666;"><strong>Company:</strong></td>
            <td style="color: #333;">${data.company}</td>
          </tr>
        </table>

        <p style="color: #666; font-size: 14px; line-height: 1.6; margin-top: 25px;">
          <strong>Important:</strong> This consultation request does not establish an attorney-client relationship. All information you have provided is kept strictly confidential.
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
function generateClientSMS(firstName: string, date: string, time: string): string {
  return `Hi ${firstName}, your consultation request with Trembach Law Firm for ${formatDate(date)} at ${time} has been received. We will confirm within 24 hours. Call ${FIRM_PHONE} for urgent matters. - Trembach Law`;
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
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
    const data: ConsultationFormData = JSON.parse(event.body || "{}");

    // Validate required fields
    const requiredFields = [
      "firstName", "lastName", "company", "email", "phone",
      "practiceArea", "caseDescription", "consultationType",
      "timezone", "preferredDate", "preferredTime"
    ];
    for (const field of requiredFields) {
      if (!data[field as keyof ConsultationFormData]) {
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
        `New Consultation Request: ${data.firstName} ${data.lastName} - ${formatDate(data.preferredDate)}`,
        generateFirmNotificationEmail(data),
        data.email
      ),
      // Send confirmation email to client
      sendEmail(
        data.email,
        "Consultation Request Received - Trembach Law Firm",
        generateClientConfirmationEmail(data)
      ),
      // Send SMS confirmation to client
      sendSMS(
        data.phone,
        generateClientSMS(data.firstName, data.preferredDate, data.preferredTime)
      ),
    ]);

    // Log results
    console.log("Firm email:", firmEmailResult);
    console.log("Client email:", clientEmailResult);
    console.log("SMS:", smsResult);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Your consultation request has been submitted successfully. We will confirm your appointment within 24 hours.",
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
