# Contact Form Setup - Complete Guide

## ✅ What's Been Implemented

Your contact form now has:
- ✅ **Email validation** - Validates email format in real-time
- ✅ **Form validation** - Validates all fields (name, email, subject, message)
- ✅ **Email sending** - Sends emails directly to your inbox using EmailJS
- ✅ **Error handling** - Shows clear error messages
- ✅ **Success messages** - Confirms when email is sent
- ✅ **Loading states** - Shows loading spinner while sending
- ✅ **User-friendly UI** - Beautiful error/success messages

## 🚀 Quick Setup (5 minutes)

### Step 1: Sign up for EmailJS (Free)
1. Go to: https://www.emailjs.com/
2. Click "Sign Up" (it's free - 200 emails/month)
3. Create account with: sadamn.developer@gmail.com
4. Verify your email

### Step 2: Connect Your Email
1. In EmailJS dashboard → **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (or your email provider)
4. Click **"Connect Account"** and authorize
5. **Copy the Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"** → **"Create New Template"**
2. Use this template:

```
Subject: Portfolio Contact: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

3. **Copy the Template ID** (looks like: `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"General"**
2. **Copy your Public Key** (looks like: `abc123xyz789`)

### Step 5: Update script.js
Open `script.js` and find this section at the top (around line 5):

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',        // Replace this
    SERVICE_ID: 'YOUR_SERVICE_ID',        // Replace this
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID',      // Replace this
    TO_EMAIL: 'sadamn.developer@gmail.com' // Already set!
};
```

Replace the three placeholders with your actual values:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'abc123xyz789',              // Your Public Key
    SERVICE_ID: 'service_abc123',             // Your Service ID
    TEMPLATE_ID: 'template_xyz789',           // Your Template ID
    TO_EMAIL: 'sadamn.developer@gmail.com'    // Your email
};
```

### Step 6: Test It!
1. Open your portfolio website
2. Fill out the contact form
3. Submit it
4. Check your email inbox!

## 📧 How It Works

1. User fills out the form
2. JavaScript validates all fields
3. Email is validated (format check)
4. If valid, email is sent via EmailJS
5. You receive email at: sadamn.developer@gmail.com
6. User sees success message

## ✨ Features

### Email Validation
- ✅ Checks email format (e.g., user@example.com)
- ✅ Real-time validation on blur
- ✅ Clear error messages

### Form Validation
- ✅ Name: Required, minimum 2 characters
- ✅ Email: Required, valid format
- ✅ Subject: Required, minimum 3 characters
- ✅ Message: Required, minimum 10 characters

### User Experience
- ✅ Loading spinner while sending
- ✅ Success message on completion
- ✅ Error messages for validation failures
- ✅ Form resets after successful submission
- ✅ Smooth animations

## 🔧 Troubleshooting

### "Email service is not configured"
- Make sure you've replaced all three IDs in `script.js`
- Check that there are no extra spaces in the IDs

### Email not received?
1. Check **Spam/Junk** folder
2. Verify all IDs are correct
3. Check browser console (F12) for errors
4. Make sure EmailJS service is connected

### Validation not working?
- Make sure `script.js` is loaded
- Check browser console for JavaScript errors
- Clear browser cache

## 📝 Email Template Variables

Your template uses these variables:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (sadamn.developer@gmail.com)

## 🎨 Customization

### Change Validation Rules
Edit `script.js` around line 140-193:
```javascript
// Example: Change minimum message length
} else if (message.length < 20) {  // Changed from 10 to 20
    showError('message', 'Message must be at least 20 characters');
```

### Change Success Message
Edit `script.js` around line 238:
```javascript
showFormMessage('Your custom success message!', 'success');
```

### Change Error Messages
Edit the validation functions in `script.js` to customize error text.

## 📚 More Information

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **Setup Guide**: See `EMAILJS_SETUP.md` for detailed instructions
- **Free Tier**: 200 emails/month (perfect for portfolio!)

## ✅ Checklist

- [ ] Created EmailJS account
- [ ] Connected email service (Gmail/Outlook)
- [ ] Created email template
- [ ] Got Public Key, Service ID, Template ID
- [ ] Updated `script.js` with all three IDs
- [ ] Tested the form
- [ ] Received test email in inbox

---

**Your contact form is ready!** Once you complete the setup, visitors can send you messages directly from your portfolio! 🎉

