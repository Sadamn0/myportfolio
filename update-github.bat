@echo off
echo ========================================
echo   Update Portfolio on GitHub
echo ========================================
echo.

echo Step 1: Adding all changes...
git add .
echo.

echo Step 2: Committing changes...
git commit -m "Update portfolio: Add contact form with EmailJS integration"
echo.

echo Step 3: Pushing to GitHub...
echo NOTE: You may be asked for your GitHub username and password
echo Use your Personal Access Token as the password
echo.
git push

echo.
echo ========================================
echo   Done! Your portfolio is updated!
echo ========================================
echo.
echo Your live portfolio: https://sadamn0.github.io/myportfolio/
echo.
pause

