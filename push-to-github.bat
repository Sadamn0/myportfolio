@echo off
echo ========================================
echo   GitHub Push Script for Portfolio
echo ========================================
echo.

echo Step 1: Adding all files to Git...
git add .
echo.

echo Step 2: Committing changes...
git commit -m "Initial commit: Java Developer Portfolio"
echo.

echo Step 3: Please enter your GitHub repository URL
echo Example: https://github.com/YOUR_USERNAME/java-developer-portfolio.git
set /p REPO_URL="Repository URL: "

echo.
echo Step 4: Setting up remote repository...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
echo.

echo Step 5: Setting main branch...
git branch -M main
echo.

echo Step 6: Pushing to GitHub...
echo NOTE: You will be asked for your GitHub username and password
echo Use your Personal Access Token as the password (not your GitHub password)
echo.
git push -u origin main

echo.
echo ========================================
echo   Done! Check your GitHub repository
echo ========================================
pause

