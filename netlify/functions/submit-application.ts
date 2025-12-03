import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

// Email and SMS service configuration
const FIRM_EMAIL = "infotrade@trembachlaw.com";
const FIRM_NAME = "Trembach Law Firm";
const FIRM_PHONE = "(310) 744-1328";

interface TrialCase {
  name: string;
  court: string;
  caseNumber: string;
  year: string;
  role: string;
  subject: string;
  outcome: string;
}

interface ApplicationFormData {
  // Category
  category: "attorney" | "compliance" | "paralegal" | "students";

  // Application Info
  office: string;
  department: string;
  position: string;

  // Personal
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  barAdmissions?: string;

  // Education
  lawSchool?: string;
  gradYear?: string;
  undergrad?: string;
  undergradDegree?: string;
  undergradYear?: string;

  // Experience
  yearsPractice?: string;
  areasFocus?: string[];
  federalCourtExp?: string;
  trialCases?: TrialCase[];
  workHistory?: string;
  skills?: string;

  // Additional
  whyTrembach: string;
  challengingScenario?: string;
  salary?: string;
  startDate?: string;
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

// Format category for display
function formatCategory(category: string): string {
  const categories: Record<string, string> = {
    attorney: "Trial Attorney",
    compliance: "Trade Compliance Professional",
    paralegal: "Paralegal",
    students: "Law Student / Clerk",
  };
  return categories[category] || category;
}

// Generate trial cases HTML for attorney applications
function generateTrialCasesSection(trialCases: TrialCase[]): string {
  if (!trialCases || trialCases.length === 0) return "";

  const casesHtml = trialCases
    .filter((c) => c.name && c.court)
    .map(
      (c, i) => `
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #666;">${i + 1}</td>
        <td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #333;">${c.name}</td>
        <td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #333;">${c.court}</td>
        <td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #333;">${c.year}</td>
        <td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #333;">${c.role}</td>
      </tr>`
    )
    .join("");

  return `
    <h2 style="color: #012169; font-size: 18px; margin: 25px 0 15px 0; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">Trial Experience (${trialCases.filter((c) => c.name).length} Cases)</h2>
    <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 13px; margin-bottom: 25px;">
      <tr style="background-color: #f3f4f6;">
        <th style="padding: 10px; text-align: left; color: #374151;">#</th>
        <th style="padding: 10px; text-align: left; color: #374151;">Case Name</th>
        <th style="padding: 10px; text-align: left; color: #374151;">Court</th>
        <th style="padding: 10px; text-align: left; color: #374151;">Year</th>
        <th style="padding: 10px; text-align: left; color: #374151;">Role</th>
      </tr>
      ${casesHtml}
    </table>
  `;
}

// Generate firm notification email
function generateFirmNotificationEmail(data: ApplicationFormData): string {
  const trialCasesSection =
    data.category === "attorney" && data.trialCases
      ? generateTrialCasesSection(data.trialCases)
      : "";

  const barSection = data.barAdmissions
    ? `<tr>
            <td style="color: #666; vertical-align: top;"><strong>Bar Admissions:</strong></td>
            <td style="color: #333;">${data.barAdmissions}</td>
          </tr>`
    : "";

  const educationSection = data.lawSchool
    ? `<tr>
            <td style="color: #666; vertical-align: top;"><strong>Law School:</strong></td>
            <td style="color: #333;">${data.lawSchool} (${data.gradYear || "N/A"})</td>
          </tr>`
    : "";

  const undergradSection = data.undergrad
    ? `<tr>
            <td style="color: #666; vertical-align: top;"><strong>Undergraduate:</strong></td>
            <td style="color: #333;">${data.undergrad} - ${data.undergradDegree || "N/A"} (${data.undergradYear || "N/A"})</td>
          </tr>`
    : "";

  const workHistorySection = data.workHistory
    ? `
        <h2 style="color: #012169; font-size: 18px; margin: 25px 0 15px 0; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">Work History</h2>
        <p style="color: #333; background-color: #f9fafb; padding: 15px; border-radius: 6px; white-space: pre-wrap; font-size: 14px;">${data.workHistory}</p>`
    : "";

  const skillsSection = data.skills
    ? `<tr>
            <td style="color: #666; vertical-align: top;"><strong>Skills:</strong></td>
            <td style="color: #333;">${data.skills}</td>
          </tr>`
    : "";

  const scenarioSection = data.challengingScenario
    ? `
        <h2 style="color: #012169; font-size: 18px; margin: 25px 0 15px 0; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">Challenging Trial/Hearing</h2>
        <p style="color: #333; background-color: #f9fafb; padding: 15px; border-radius: 6px; white-space: pre-wrap; font-size: 14px;">${data.challengingScenario}</p>`
    : "";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Job Application</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 700px; margin: 0 auto; background-color: #ffffff;">
    <tr>
      <td style="background-color: #012169; padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">New Job Application</h1>
        <p style="color: #0d9488; margin: 10px 0 0 0; font-size: 16px;">${formatCategory(data.category)}</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px;">
        <div style="background-color: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px; margin-bottom: 25px;">
          <p style="margin: 0; color: #1e40af; font-weight: bold;">New application received for: ${data.position}</p>
          <p style="margin: 5px 0 0 0; color: #1e40af; font-size: 14px;">Office: ${data.office} | Department: ${data.department}</p>
        </div>

        <h2 style="color: #012169; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">Applicant Information</h2>
        <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 25px;">
          <tr>
            <td style="color: #666; width: 140px; vertical-align: top;"><strong>Name:</strong></td>
            <td style="color: #333;">${data.firstName} ${data.lastName}</td>
          </tr>
          <tr>
            <td style="color: #666; vertical-align: top;"><strong>Email:</strong></td>
            <td style="color: #333;"><a href="mailto:${data.email}" style="color: #0d9488;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="color: #666; vertical-align: top;"><strong>Phone:</strong></td>
            <td style="color: #333;"><a href="tel:${data.phone}" style="color: #0d9488;">${data.phone}</a></td>
          </tr>
          ${data.address ? `<tr><td style="color: #666; vertical-align: top;"><strong>Address:</strong></td><td style="color: #333;">${data.address}</td></tr>` : ""}
          ${barSection}
        </table>

        <h2 style="color: #012169; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">Education</h2>
        <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 25px;">
          ${educationSection}
          ${undergradSection}
        </table>

        <h2 style="color: #012169; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">Experience</h2>
        <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 25px;">
          ${data.yearsPractice ? `<tr><td style="color: #666; width: 140px; vertical-align: top;"><strong>Years Practice:</strong></td><td style="color: #333;">${data.yearsPractice}</td></tr>` : ""}
          ${data.areasFocus && data.areasFocus.length > 0 ? `<tr><td style="color: #666; vertical-align: top;"><strong>Focus Areas:</strong></td><td style="color: #333;">${data.areasFocus.join(", ")}</td></tr>` : ""}
          ${skillsSection}
        </table>

        ${trialCasesSection}
        ${workHistorySection}

        <h2 style="color: #012169; font-size: 18px; margin: 25px 0 15px 0; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">Why Trembach Law Firm</h2>
        <p style="color: #333; background-color: #f9fafb; padding: 15px; border-radius: 6px; white-space: pre-wrap; font-size: 14px;">${data.whyTrembach}</p>

        ${scenarioSection}

        <h2 style="color: #012169; font-size: 18px; margin: 25px 0 15px 0; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">Availability</h2>
        <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 25px;">
          ${data.salary ? `<tr><td style="color: #666; width: 140px; vertical-align: top;"><strong>Salary Expectation:</strong></td><td style="color: #333;">${data.salary}</td></tr>` : ""}
          ${data.startDate ? `<tr><td style="color: #666; vertical-align: top;"><strong>Start Date:</strong></td><td style="color: #333;">${data.startDate}</td></tr>` : ""}
        </table>

        <div style="background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 4px; padding: 15px; margin-top: 20px;">
          <p style="margin: 0; color: #92400e; font-size: 14px;"><strong>Note:</strong> Resume and writing samples have been submitted separately. Please check the attached files.</p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #012169; padding: 20px; text-align: center;">
        <p style="color: #ffffff; margin: 0; font-size: 12px;">This email was automatically generated from the Trembach Law Firm careers portal.</p>
        <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 11px;">Submitted on ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PT</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

// Generate applicant confirmation email
function generateApplicantConfirmationEmail(data: ApplicationFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Received - Trembach Law Firm</title>
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
        <h2 style="color: #012169; font-size: 22px; margin: 0 0 20px 0;">Application Received</h2>

        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Dear ${data.firstName},
        </p>

        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Thank you for your interest in joining Trembach Law Firm. We have received your application for the <strong>${data.position}</strong> position and appreciate the time you invested in submitting your materials.
        </p>

        <div style="background-color: #e8f4f8; border-radius: 8px; padding: 25px; margin: 25px 0;">
          <h3 style="color: #012169; margin: 0 0 15px 0; font-size: 16px;">Application Summary</h3>
          <table width="100%" cellpadding="10" cellspacing="0">
            <tr>
              <td style="color: #666; width: 120px; border-bottom: 1px solid #e5e5e5;"><strong>Position:</strong></td>
              <td style="color: #333; border-bottom: 1px solid #e5e5e5;">${data.position}</td>
            </tr>
            <tr>
              <td style="color: #666; border-bottom: 1px solid #e5e5e5;"><strong>Office:</strong></td>
              <td style="color: #333; border-bottom: 1px solid #e5e5e5;">${data.office}</td>
            </tr>
            <tr>
              <td style="color: #666;"><strong>Submitted:</strong></td>
              <td style="color: #333;">${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; margin: 25px 0;">
          <h3 style="color: #012169; margin: 0 0 10px 0; font-size: 15px;">What Happens Next?</h3>
          <ul style="color: #333; margin: 0; padding-left: 20px; line-height: 1.8; font-size: 14px;">
            <li>Our hiring committee will carefully review your application</li>
            <li>If your qualifications match our current needs, we will contact you for an interview</li>
            <li>The review process typically takes 2-4 weeks</li>
            <li>We will keep your application on file for future opportunities</li>
          </ul>
        </div>

        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-top: 25px;">
          At Trembach Law Firm, we are committed to building a diverse team of exceptional legal professionals who share our passion for international trade and customs law. We appreciate your interest in contributing to our mission.
        </p>

        <p style="color: #666; font-size: 14px; line-height: 1.6; margin-top: 25px;">
          Please note that due to the volume of applications we receive, we are unable to respond to individual status inquiries. We will contact you directly if you are selected for an interview.
        </p>

        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-top: 20px;">
          Best regards,<br>
          <strong>The Trembach Law Firm Hiring Team</strong>
        </p>
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
          Trembach Law Firm is an Equal Opportunity Employer.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

// Generate SMS confirmation message
function generateApplicantSMS(firstName: string, position: string): string {
  return `Hi ${firstName}, thank you for applying to Trembach Law Firm for the ${position} position. Your application has been received and is being reviewed. We will contact you if selected for an interview. - Trembach Law`;
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
    const data: ApplicationFormData = JSON.parse(event.body || "{}");

    // Validate required fields
    const requiredFields = [
      "category", "office", "position", "firstName", "lastName",
      "email", "phone", "whyTrembach"
    ];
    for (const field of requiredFields) {
      if (!data[field as keyof ApplicationFormData]) {
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
    const [firmEmailResult, applicantEmailResult, smsResult] = await Promise.allSettled([
      // Send email to firm
      sendEmail(
        FIRM_EMAIL,
        `New Application: ${formatCategory(data.category)} - ${data.firstName} ${data.lastName}`,
        generateFirmNotificationEmail(data),
        data.email
      ),
      // Send confirmation email to applicant
      sendEmail(
        data.email,
        "Application Received - Trembach Law Firm",
        generateApplicantConfirmationEmail(data)
      ),
      // Send SMS confirmation to applicant
      sendSMS(
        data.phone,
        generateApplicantSMS(data.firstName, data.position)
      ),
    ]);

    // Log results
    console.log("Firm email:", firmEmailResult);
    console.log("Applicant email:", applicantEmailResult);
    console.log("SMS:", smsResult);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Your application has been submitted successfully. You will receive a confirmation email shortly.",
        notifications: {
          firmEmail: firmEmailResult.status === "fulfilled" && firmEmailResult.value,
          applicantEmail: applicantEmailResult.status === "fulfilled" && applicantEmailResult.value,
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
