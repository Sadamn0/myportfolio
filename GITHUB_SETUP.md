# How to Push Your Portfolio to GitHub

Follow these steps to upload your portfolio to GitHub and make it viewable to everyone:

## Step 1: Create a GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create a New Repository on GitHub
1. Log in to GitHub
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Repository name: `java-developer-portfolio` (or any name you prefer)
5. Description: "Modern Java Developer Portfolio Website"
6. Make sure it's set to **Public** (so everyone can view it)
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **"Create repository"**

## Step 3: Push Your Code to GitHub

Open PowerShell or Command Prompt in your project folder and run these commands:

```bash
# Check if git is initialized (should already be done)
git status

# Add all files to staging
git add .

# Commit the files
git commit -m "Initial commit: Java Developer Portfolio"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/java-developer-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** When you run `git push`, GitHub will ask for your username and password. 
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your GitHub password)

### How to Create a Personal Access Token:
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "Portfolio Upload"
4. Select scopes: Check **"repo"** (this gives full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing

## Step 4: Enable GitHub Pages (Make it Viewable Online)

1. Go to your repository on GitHub
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under "Source", select **"Deploy from a branch"**
5. Select branch: **"main"**
6. Select folder: **"/ (root)"**
7. Click **"Save"**
8. Wait 1-2 minutes for GitHub to build your site
9. Your portfolio will be live at: `https://YOUR_USERNAME.github.io/java-developer-portfolio/`

## Step 5: Update Your README with Live Link

After getting your GitHub Pages URL, update the README.md file with the actual link.

## Troubleshooting

### If you get "remote origin already exists" error:
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/java-developer-portfolio.git
```

### If you need to update your files later:
```bash
git add .
git commit -m "Update portfolio"
git push
```

### To check your remote URL:
```bash
git remote -v
```

## Quick Commands Summary

```bash
# Initial setup (one time)
git add .
git commit -m "Initial commit: Java Developer Portfolio"
git remote add origin https://github.com/YOUR_USERNAME/java-developer-portfolio.git
git branch -M main
git push -u origin main

# Future updates
git add .
git commit -m "Your update message"
git push
```

---

**Your portfolio will be accessible at:**
`https://YOUR_USERNAME.github.io/java-developer-portfolio/`

Share this link with employers, clients, or anyone you want to show your portfolio to!

