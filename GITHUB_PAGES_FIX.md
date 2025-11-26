# Fix GitHub Pages - Portfolio Not Displaying

## ✅ Quick Fix Steps

### Step 1: Enable GitHub Pages
1. Go to: https://github.com/Sadamn0/myportfolio
2. Click **"Settings"** tab (top menu)
3. Click **"Pages"** in left sidebar
4. Under **"Source"**:
   - Select: **"Deploy from a branch"**
   - Branch: **"main"**
   - Folder: **"/ (root)"**
5. Click **"Save"**

### Step 2: Wait for Build
- GitHub will show: "Your site is ready to be published"
- Wait 1-2 minutes for the build to complete
- Refresh the page to see the green checkmark

### Step 3: Access Your Site
Your portfolio will be live at:
**https://sadamn0.github.io/myportfolio/**

---

## 🔍 Troubleshooting

### Issue: "404 - Page not found"

**Solution 1: Check Repository Name**
- Make sure your repository is named exactly: `myportfolio`
- The URL format is: `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`
- Your username: `Sadamn0`
- Repository name: `myportfolio`
- Correct URL: `https://sadamn0.github.io/myportfolio/`

**Solution 2: Check Branch Name**
- Make sure you're deploying from the `main` branch
- If your branch is called `master`, either:
  - Rename it to `main`, OR
  - Select `master` in GitHub Pages settings

**Solution 3: Check File Location**
- Make sure `index.html` is in the root folder (not in a subfolder)
- The file structure should be:
  ```
  myportfolio/
  ├── index.html
  ├── styles.css
  ├── script.js
  └── README.md
  ```

### Issue: "Site not building"

**Solution:**
1. Go to **Settings** → **Pages**
2. Check if there's an error message
3. Go to **Actions** tab to see build logs
4. Make sure the repository is **Public** (not Private)
   - Go to **Settings** → **General** → **Danger Zone**
   - Change visibility to **Public** if needed

### Issue: "Still showing 404 after enabling"

**Solution:**
1. Wait 5-10 minutes (GitHub Pages can take time to propagate)
2. Clear your browser cache (Ctrl + Shift + Delete)
3. Try in incognito/private mode
4. Check the URL is exactly: `https://sadamn0.github.io/myportfolio/`
   - No `www`
   - No trailing slash issues
   - All lowercase

### Issue: "Page loads but looks broken"

**Solution:**
1. Check browser console (F12) for errors
2. Make sure all file paths are correct:
   - `styles.css` should be in root
   - `script.js` should be in root
3. Check if external resources are loading:
   - Font Awesome CDN
   - Google Fonts

---

## 📝 Verify Your Setup

### Checklist:
- [ ] Repository is **Public**
- [ ] GitHub Pages is enabled in **Settings** → **Pages**
- [ ] Source is set to **"Deploy from a branch"**
- [ ] Branch is set to **"main"**
- [ ] Folder is set to **"/ (root)"**
- [ ] `index.html` is in the root folder
- [ ] All files are committed and pushed to GitHub
- [ ] Wait 2-5 minutes after enabling

---

## 🚀 After Enabling

1. **Update README.md** with your live URL:
   ```
   ## Live Demo
   Visit: https://sadamn0.github.io/myportfolio/
   ```

2. **Share your portfolio:**
   - Add the link to your resume
   - Share on LinkedIn
   - Add to your GitHub profile

3. **Custom Domain (Optional):**
   - If you have a custom domain, add it in **Settings** → **Pages** → **Custom domain**

---

## ⚡ Quick Commands (if you need to update)

If you make changes and need to push updates:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will automatically rebuild (takes 1-2 minutes).

---

## 📞 Still Not Working?

1. Check GitHub Status: https://www.githubstatus.com/
2. Verify repository is public
3. Check Actions tab for build errors
4. Make sure `index.html` is exactly named (case-sensitive)

---

**Your portfolio URL:** https://sadamn0.github.io/myportfolio/

