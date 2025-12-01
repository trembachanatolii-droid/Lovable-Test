# Form Email & SMS Notification Setup Guide

This document explains how to configure the email and SMS notification system for the Trembach Law Firm website forms.

## Overview

The website includes three forms that now send notifications:
1. **Evaluation Form** - Free case evaluation requests (appears on 117+ pages)
2. **Consultation Booking Form** - Schedule consultation appointments
3. **Application Form** - Job applications for attorney, compliance, paralegal, and student positions

When a visitor submits any form:
- ✅ The firm receives an email notification at `infotrade@trembachlaw.com`
- ✅ The visitor receives a professional confirmation email
- ✅ The visitor receives an SMS text message confirmation

## Required Environment Variables

You must configure these environment variables in your Netlify dashboard:

### 1. Email Service (Resend)

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Your Resend API key (starts with `re_`) |
| `EMAIL_DOMAIN` | Your verified sending domain (e.g., `trembachlaw.com`) |

### 2. SMS Service (Twilio)

| Variable | Description |
|----------|-------------|
| `TWILIO_ACCOUNT_SID` | Your Twilio Account SID (starts with `AC`) |
| `TWILIO_AUTH_TOKEN` | Your Twilio Auth Token |
| `TWILIO_PHONE_NUMBER` | Your Twilio phone number (format: `+1XXXXXXXXXX`) |

## Setup Instructions

### Step 1: Set Up Resend for Email

1. Go to [Resend](https://resend.com) and create an account
2. Verify your domain (`trembachlaw.com`) by adding DNS records
3. Create an API key in the Resend dashboard
4. Copy the API key (starts with `re_`)

### Step 2: Set Up Twilio for SMS

1. Go to [Twilio](https://www.twilio.com) and create an account
2. Get your Account SID and Auth Token from the Console Dashboard
3. Purchase a phone number with SMS capabilities
4. Note your phone number in the format `+1XXXXXXXXXX`

### Step 3: Add Environment Variables to Netlify

1. Go to your Netlify dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add the following variables:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
EMAIL_DOMAIN=trembachlaw.com
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER=+13101234567
```

4. Click **Save**
5. Trigger a new deployment to apply the changes

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
3. Check the Netlify function logs for errors

### SMS not sending:
1. Check that all Twilio variables are correctly set
2. Verify the phone number format is correct (`+1XXXXXXXXXX`)
3. Ensure your Twilio account has SMS credits
4. Check the Netlify function logs for errors

### Testing:
- Use the Netlify function logs to debug issues
- Test with valid email and phone numbers
- Check spam folders for test emails

## Function Endpoints

The following Netlify Functions handle form submissions:

| Endpoint | Form |
|----------|------|
| `/.netlify/functions/submit-evaluation` | Case Evaluation Form |
| `/.netlify/functions/submit-consultation` | Consultation Booking Form |
| `/.netlify/functions/submit-application` | Job Application Form |

## Cost Considerations

### Resend:
- Free tier: 3,000 emails/month
- Paid plans start at $20/month for 50,000 emails

### Twilio:
- Pay-as-you-go pricing
- SMS: ~$0.0079/message (US)
- Phone numbers: ~$1.15/month

For a law firm website, the free Resend tier should be sufficient, and Twilio costs will be minimal.

## Security Notes

- API keys are stored securely in Netlify environment variables
- Keys are never exposed to the frontend
- All form data is validated on the server
- CORS is configured for security
- All submissions are logged for debugging

## Support

For technical issues with the form system, check:
1. Netlify function logs
2. Resend dashboard for email delivery status
3. Twilio console for SMS delivery status
