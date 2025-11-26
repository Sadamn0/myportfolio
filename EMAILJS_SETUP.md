# EmailJS Setup Guide - Contact Form

This guide will help you set up EmailJS to receive emails from your contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free!)
3. Create an account using your email (sadamn.developer@gmail.com)
4. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended if you use Gmail)
   - **Outlook**
   - **Yahoo**
   - Or any other SMTP service
4. Follow the setup instructions for your email provider
5. **Save the Service ID** (you'll need this later)

### For Gmail:
- Click "Connect Account"
- Authorize EmailJS to send emails on your behalf
- Give it a name (e.g., "Portfolio Contact Form")

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template:

```
Subject: Portfolio Contact: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. **Save the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find your **"Public Key"** (also called API Key)
3. Copy it (you'll need this)

## Step 5: Update Your Code

Open `script.js` and replace these placeholders:

1. **Line ~90**: Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual key
   ```

2. **Line ~150**: Replace `YOUR_SERVICE_ID` with your Service ID
   ```javascript
   const response = await emailjs.send(
       'YOUR_SERVICE_ID',  // Replace with your Service ID
       'YOUR_TEMPLATE_ID', // Replace with your Template ID
       templateParams
   );
   ```

3. **Line ~151**: Replace `YOUR_TEMPLATE_ID` with your Template ID

### Example:
```javascript
// Initialize EmailJS
emailjs.init("abc123xyz789"); // Your Public Key

// Send email
const response = await emailjs.send(
    'service_gmail123',      // Your Service ID
    'template_abc456',       // Your Template ID
    templateParams
);
```

## Step 6: Test Your Form

1. Open your portfolio website
2. Fill out the contact form
3. Submit it
4. Check your email inbox (sadamn.developer@gmail.com)
5. You should receive the email!

## Troubleshooting

### Email not received?
1. Check your **Spam/Junk** folder
2. Verify all IDs are correct in `script.js`
3. Check browser console (F12) for errors
4. Make sure EmailJS service is connected properly

### "Invalid Public Key" error?
- Double-check your Public Key in EmailJS dashboard
- Make sure there are no extra spaces

### "Service ID not found" error?
- Verify your Service ID in EmailJS dashboard
- Make sure the service is active

### "Template ID not found" error?
- Verify your Template ID in EmailJS dashboard
- Make sure the template is published

## Free Tier Limits

EmailJS free tier includes:
- ✅ 200 emails per month
- ✅ Unlimited templates
- ✅ All features

This is perfect for a portfolio website!

## Security Note

Your Public Key is safe to use in client-side code. It's designed to be public.
However, for production, consider:
- Adding rate limiting
- Using reCAPTCHA to prevent spam
- Setting up email filters

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

---

**Quick Checklist:**
- [ ] Created EmailJS account
- [ ] Added email service (Gmail/Outlook/etc.)
- [ ] Created email template
- [ ] Got Public Key, Service ID, and Template ID
- [ ] Updated script.js with all three IDs
- [ ] Tested the form
- [ ] Received test email

Once complete, your contact form will send emails directly to your inbox! 🎉

