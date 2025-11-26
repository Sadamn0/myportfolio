# Fix Error 422 - Template Variables Mismatch

## What is Error 422?

**Error 422 (Unprocessable Entity)** means EmailJS received your request, but the template variables don't match what your template expects.

## 🔍 Root Cause

Your EmailJS template is expecting different variable names than what your code is sending.

### What Your Code Sends:
```javascript
const templateParams = {
    from_name: name,        // ← Sending this
    from_email: email,      // ← Sending this
    subject: subject,        // ← Sending this
    message: message,       // ← Sending this
    to_email: EMAILJS_CONFIG.TO_EMAIL
};
```

### What Your Template Must Use:
Your EmailJS template must use these **exact** variable names:
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`

## ✅ How to Fix

### Step 1: Go to Your EmailJS Template

1. Log in to EmailJS: https://dashboard.emailjs.com/
2. Go to **"Email Templates"**
3. Find your template: `template_m5krhhp`
4. Click to **Edit** it

### Step 2: Check Your Template Content

Your template should look like this:

```
Subject: Portfolio Contact: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

### Step 3: Common Mistakes to Fix

❌ **Wrong variable names:**
```
{{name}}          ← Wrong
{{user_name}}     ← Wrong
{{email}}         ← Wrong
{{user_email}}    ← Wrong
{{msg}}           ← Wrong
{{content}}       ← Wrong
```

✅ **Correct variable names:**
```
{{from_name}}     ← Correct
{{from_email}}    ← Correct
{{subject}}        ← Correct
{{message}}        ← Correct
```

### Step 4: Update Your Template

1. Make sure your template uses **exactly** these variables:
   - `{{from_name}}` - for the sender's name
   - `{{from_email}}` - for the sender's email
   - `{{subject}}` - for the subject
   - `{{message}}` - for the message content

2. **Example Template:**
```
Subject: Portfolio Contact: {{subject}}

Hello,

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio website.
```

### Step 5: Save and Publish

1. Click **"Save"** in your template
2. Make sure template is **"Published"** (not Draft)
3. Go back to your website and test again

## 🔍 Verify Template Variables

### In EmailJS Dashboard:
1. Go to your template
2. Look at the template content
3. Check if you see:
   - `{{from_name}}` ✅
   - `{{from_email}}` ✅
   - `{{subject}}` ✅
   - `{{message}}` ✅

### If You See Different Variables:
- `{{name}}` → Change to `{{from_name}}`
- `{{email}}` → Change to `{{from_email}}`
- `{{user_name}}` → Change to `{{from_name}}`
- `{{user_email}}` → Change to `{{from_email}}`
- `{{msg}}` → Change to `{{message}}`
- `{{content}}` → Change to `{{message}}`

## 📋 Complete Template Example

Copy this exact template into EmailJS:

**Subject Line:**
```
Portfolio Contact: {{subject}}
```

**Email Body:**
```
You have received a new message from your portfolio contact form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was sent from your portfolio website.
Please reply directly to: {{from_email}}
```

## ✅ Quick Checklist

- [ ] Template uses `{{from_name}}` (not `{{name}}` or `{{user_name}}`)
- [ ] Template uses `{{from_email}}` (not `{{email}}` or `{{user_email}}`)
- [ ] Template uses `{{subject}}`
- [ ] Template uses `{{message}}` (not `{{msg}}` or `{{content}}`)
- [ ] Template is **Published** (not Draft)
- [ ] All variables are spelled correctly (case-sensitive)
- [ ] No extra spaces in variable names
- [ ] Variables are wrapped in double curly braces: `{{variable}}`

## 🧪 Test Your Template

1. In EmailJS dashboard, go to your template
2. Click **"Test"** button
3. Fill in test values:
   - from_name: Test User
   - from_email: test@example.com
   - subject: Test Subject
   - message: Test message
4. Click "Send Test Email"
5. If test works, your template is correct!

## 🚨 Still Getting Error 422?

1. **Double-check variable names** - They must match exactly
2. **Check for typos** - `{{from_name}}` not `{{fromname}}`
3. **Check spacing** - No spaces: `{{from_name}}` not `{{ from_name }}`
4. **Check case** - All lowercase: `{{from_name}}` not `{{From_Name}}`
5. **Remove unused variables** - Don't use variables you're not sending
6. **Publish template** - Make sure it's published, not draft

## 📝 Alternative: Update Code to Match Template

If you want to keep your current template variables, you can update the code instead:

**In script.js, change:**
```javascript
const templateParams = {
    from_name: name,     // Keep this
    from_email: email,   // Keep this
    subject: subject,    // Keep this
    message: message,    // Keep this
    to_email: EMAILJS_CONFIG.TO_EMAIL
};
```

**To match your template variables** (if different):
```javascript
const templateParams = {
    name: name,          // If template uses {{name}}
    email: email,        // If template uses {{email}}
    subject: subject,
    message: message,
    to_email: EMAILJS_CONFIG.TO_EMAIL
};
```

**But it's easier to fix the template!** ✅

---

**Most Common Issue:** Template uses `{{name}}` instead of `{{from_name}}` or `{{email}}` instead of `{{from_email}}`.

Fix the template variable names and Error 422 will be resolved! 🎉

