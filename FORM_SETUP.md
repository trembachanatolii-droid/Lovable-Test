# Form Email & SMS Notification Setup Guide

This document explains how to configure the email and SMS notification system for the Trembach Law Firm website forms.

## Overview

The website includes three forms that send notifications:
1. **Evaluation Form** - Free case evaluation requests (appears on 117+ pages)
2. **Consultation Booking Form** - Schedule consultation appointments
3. **Application Form** - Job applications for attorney, compliance, paralegal, and student positions

When a visitor submits any form:
- ✅ The firm receives an email notification at `infotrade@trembachlaw.com`
- ✅ The visitor receives a professional confirmation email
- ✅ The visitor receives an SMS text message confirmation via RingCentral

## Required Environment Variables

You must configure these environment variables in your hosting provider:

### 1. Email Service (Resend)

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Your Resend API key (starts with `re_`) |
| `EMAIL_DOMAIN` | Your verified sending domain (e.g., `trembachlaw.com`) |

### 2. SMS Service (RingCentral)

| Variable | Description |
|----------|-------------|
| `RINGCENTRAL_CLIENT_ID` | Your RingCentral App Client ID |
| `RINGCENTRAL_CLIENT_SECRET` | Your RingCentral App Client Secret |
| `RINGCENTRAL_JWT_TOKEN` | Your RingCentral JWT Token for authentication |
| `RINGCENTRAL_PHONE_NUMBER` | Your RingCentral phone number (format: `+1XXXXXXXXXX`) |
| `RINGCENTRAL_SERVER_URL` | Optional: defaults to `https://platform.ringcentral.com` |

## Setup Instructions

### Step 1: Set Up Resend for Email

1. Go to [Resend](https://resend.com) and create an account
2. Verify your domain (`trembachlaw.com`) by adding DNS records
3. Create an API key in the Resend dashboard
4. Copy the API key (starts with `re_`)

### Step 2: Set Up RingCentral for SMS

1. Log into your [RingCentral Developer Portal](https://developers.ringcentral.com)
2. Create a new application (or use existing):
   - App Type: **Server-only (No UI)**
   - Platform Type: **Server/Bot**
   - Permissions needed: **SMS**, **Read Messages**
3. Get your credentials from the app dashboard:
   - **Client ID**
   - **Client Secret**
4. Generate a JWT Token:
   - Go to **Credentials** → **JWT** in your app
   - Click **Create JWT** and copy the token
5. Note your RingCentral phone number with SMS capability

### Step 3: Add Environment Variables

#### For Hostinger:

1. Log into your Hostinger control panel
2. Navigate to **Websites** → Your site → **Advanced** → **Environment Variables**
3. Add each variable:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
EMAIL_DOMAIN=trembachlaw.com
RINGCENTRAL_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxx
RINGCENTRAL_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxx
RINGCENTRAL_JWT_TOKEN=eyJxxxxxxxxxxxxxxxxxxxxxxxx
RINGCENTRAL_PHONE_NUMBER=+13101234567
```

#### For Netlify (if using Netlify Functions):

1. Go to your Netlify dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add the variables listed above
4. Trigger a new deployment

### Step 4: Deploy the Serverless Functions

The form handlers are serverless functions that need to be deployed. If using:

- **Netlify**: Functions are automatically deployed from `netlify/functions/`
- **Hostinger**: You may need to configure serverless function support or use an external API service

## Email Templates

The system sends professional HTML emails with the Trembach Law Firm branding:

### For the Firm (infotrade@trembachlaw.com):
- Complete form data in a well-organized format
- Client contact information with clickable links
- Case/consultation details
- Action required notices

### For Visitors:
- Professional confirmation of receipt
- Summary of their submission
- What to expect next
- Contact information for urgent matters

## SMS Messages

Text messages are concise and professional:

**Evaluation Form:**
> Thank you for contacting Trembach Law Firm. We have received your case evaluation request and will contact you within 24 hours. For urgent matters, call us at (310) 744-1328. - Trembach Law

**Consultation Form:**
> Hi [Name], your consultation request with Trembach Law Firm for [Date] at [Time] has been received. We will confirm within 24 hours. Call (310) 744-1328 for urgent matters. - Trembach Law

**Application Form:**
> Hi [Name], thank you for applying to Trembach Law Firm for the [Position] position. Your application has been received and is being reviewed. We will contact you if selected for an interview. - Trembach Law

## Troubleshooting

### Emails not sending:
1. Check that `RESEND_API_KEY` is correctly set
2. Verify your domain is verified in Resend
3. Check the function logs for errors

### SMS not sending:
1. Verify all RingCentral environment variables are set
2. Check that your JWT token hasn't expired (regenerate if needed)
3. Ensure your RingCentral phone number has SMS capability
4. Check function logs for specific error messages

### RingCentral JWT Token Expired:
JWT tokens can expire. To regenerate:
1. Go to RingCentral Developer Portal
2. Navigate to your app → Credentials → JWT
3. Create a new JWT token
4. Update the `RINGCENTRAL_JWT_TOKEN` environment variable

## Function Endpoints

The following serverless functions handle form submissions:

| Endpoint | Form |
|----------|------|
| `/.netlify/functions/submit-evaluation` | Case Evaluation Form |
| `/.netlify/functions/submit-consultation` | Consultation Booking Form |
| `/.netlify/functions/submit-application` | Job Application Form |

## Cost Considerations

### Resend:
- Free tier: 3,000 emails/month
- Paid plans start at $20/month for 50,000 emails

### RingCentral:
- SMS included in most RingCentral business plans
- Check your RingCentral plan for SMS limits
- API access may require specific plan features

## Security Notes

- API keys are stored securely in environment variables
- Keys are never exposed to the frontend
- All form data is validated on the server
- CORS is configured for security
- All submissions are logged for debugging

## Support

For technical issues with the form system, check:
1. Serverless function logs
2. Resend dashboard for email delivery status
3. RingCentral Admin Portal for SMS delivery status
