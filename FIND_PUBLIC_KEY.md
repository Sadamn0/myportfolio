# How to Find Your EmailJS Public Key

## Quick Steps:

### Method 1: From Account Settings (Easiest)

1. **Log in to EmailJS**
   - Go to: https://www.emailjs.com/
   - Click "Sign In"

2. **Go to Account Settings**
   - Click on your **profile icon** (top right corner)
   - Select **"Account"** from the dropdown menu
   - OR go directly to: https://dashboard.emailjs.com/admin

3. **Find Public Key**
   - Scroll down to the **"API Keys"** section
   - You'll see **"Public Key"** listed there
   - Click the **"Copy"** button next to it

4. **Update script.js**
   - Open `script.js` in your project
   - Find line 6: `PUBLIC_KEY: 'YOUR_PUBLIC_KEY',`
   - Replace `'YOUR_PUBLIC_KEY'` with your actual Public Key
   - It should look like: `PUBLIC_KEY: 'abc123xyz789',`

### Method 2: From Integration Page

1. **Go to Integration**
   - In EmailJS dashboard, click **"Integration"** in the left sidebar
   - OR go to: https://dashboard.emailjs.com/integration

2. **Find Public Key**
   - Look for **"Public Key"** section
   - Copy the key shown there

### Method 3: From Documentation

1. **Go to Documentation**
   - Click **"Documentation"** in EmailJS
   - Look for "Getting Started" or "Installation"
   - The Public Key is usually shown in code examples

## What Does It Look Like?

Your Public Key will look something like:
- `abc123xyz789`
- `user_abcdefghijklmnop`
- `public_1234567890abcdef`

It's usually a long string of letters and numbers.

## Where to Put It

In your `script.js` file, around **line 6**:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',        // ← Replace this line
    SERVICE_ID: 'service_1ifrlok',         // ✅ You already have this
    TEMPLATE_ID: 'template_kzo2lfa',       // ✅ You already have this
    TO_EMAIL: 'sadamn.developer@gmail.com'
};
```

**After updating, it should look like:**

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'abc123xyz789',           // ← Your actual Public Key
    SERVICE_ID: 'service_1ifrlok',
    TEMPLATE_ID: 'template_kzo2lfa',
    TO_EMAIL: 'sadamn.developer@gmail.com'
};
```

## Quick Visual Guide

```
EmailJS Dashboard
├── Profile Icon (top right)
│   └── Account
│       └── API Keys Section
│           └── Public Key ← Copy this!
```

## Still Can't Find It?

1. **Check if you're logged in** - Make sure you're signed in to EmailJS
2. **Check Account Type** - Free accounts have Public Keys too
3. **Try Integration Page** - Sometimes it's shown there
4. **Contact Support** - support@emailjs.com if you still can't find it

## Important Notes

- ✅ Public Key is **safe to use** in client-side code (it's designed to be public)
- ✅ Don't confuse it with Private Key (which should never be exposed)
- ✅ Public Key starts with `public_` or is just a string of characters
- ✅ Make sure there are **no spaces** when copying

---

**Once you have it, update `script.js` and your contact form will work!** 🎉

