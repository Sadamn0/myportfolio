# Quick Start Guide - Push to GitHub

## 🚀 Easiest Way: Use the Batch File

1. **Double-click** `push-to-github.bat` file in your project folder
2. Follow the prompts
3. Enter your GitHub repository URL when asked
4. Enter your GitHub username and Personal Access Token when prompted

---

## 📝 Manual Method: Step-by-Step

### Step 1: Open PowerShell in Your Project Folder

**Option A - Using File Explorer:**
1. Press `Windows Key + E` to open File Explorer
2. Navigate to: `D:\Sadam's Modules\Cursor Project PortFolio Edition`
3. Click on the address bar (where the path is shown)
4. Type `powershell` and press `Enter`
   - This opens PowerShell directly in your folder!

**Option B - Using Right-Click:**
1. Open File Explorer
2. Go to your project folder: `D:\Sadam's Modules\Cursor Project PortFolio Edition`
3. Right-click in an empty area of the folder
4. Select **"Open in Terminal"** (Windows 11) or **"Open PowerShell window here"** (Windows 10)

**Option C - Using Cursor/VS Code:**
1. In Cursor, press `Ctrl + ~` (tilde key, usually above Tab)
2. This opens the terminal at the bottom
3. It should already be in your project folder

### Step 2: Verify You're in the Right Folder

In PowerShell, you should see something like:
```
PS D:\Sadam's Modules\Cursor Project PortFolio Edition>
```

If not, type:
```powershell
cd "D:\Sadam's Modules\Cursor Project PortFolio Edition"
```

### Step 3: Run These Commands One by One

Copy and paste each command, then press Enter:

```powershell
# 1. Add all files
git add .

# 2. Commit the files
git commit -m "Initial commit: Java Developer Portfolio"

# 3. Add your GitHub repository (REPLACE YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/java-developer-portfolio.git

# 4. Set main branch
git branch -M main

# 5. Push to GitHub (you'll be asked for username and password)
git push -u origin main
```

### Step 4: When Asked for Credentials

- **Username:** Your GitHub username
- **Password:** Use a **Personal Access Token** (NOT your GitHub password)

#### How to Get Personal Access Token:
1. Go to https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Name it: "Portfolio Upload"
4. Check the **"repo"** checkbox
5. Click **"Generate token"**
6. **Copy the token** (you won't see it again!)
7. Paste it as your password when pushing

---

## ✅ After Pushing

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Select **"Deploy from a branch"**
4. Branch: **main**, Folder: **/ (root)**
5. Click **Save**

Your portfolio will be live at:
`https://YOUR_USERNAME.github.io/java-developer-portfolio/`

---

## 🎯 Visual Guide

```
1. Open File Explorer
   └─> Navigate to project folder
       └─> Click address bar
           └─> Type: powershell
               └─> Press Enter

2. PowerShell opens in your folder
   └─> Copy and paste commands
       └─> Press Enter after each

3. Enter GitHub credentials when asked
   └─> Use Personal Access Token as password

4. Done! Check GitHub.com
```

---

## ❓ Troubleshooting

**"git is not recognized"**
- Install Git from: https://git-scm.com/download/win
- Restart PowerShell after installation

**"remote origin already exists"**
- Run: `git remote remove origin`
- Then run the `git remote add origin` command again

**"Authentication failed"**
- Make sure you're using Personal Access Token, not password
- Token must have "repo" scope checked

---

Need help? Check `GITHUB_SETUP.md` for detailed instructions!

