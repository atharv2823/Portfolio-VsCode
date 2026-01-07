@echo off
echo ========================================
echo   DevCode Portfolio - Setup Script
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js is installed
node --version
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed!
    pause
    exit /b 1
)

echo [OK] npm is installed
npm --version
echo.

REM Install dependencies
echo ========================================
echo Installing dependencies...
echo ========================================
echo.
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ========================================
echo Installation complete!
echo ========================================
echo.

REM Check if .env.local exists
if not exist ".env.local" (
    echo [WARNING] .env.local file not found!
    echo Creating .env.local from template...
    (
        echo # Google Gemini API Key
        echo # Get your API key from: https://aistudio.google.com/
        echo GEMINI_API_KEY=your_gemini_api_key_here
    ) > .env.local
    echo [OK] .env.local created
    echo.
    echo IMPORTANT: Please edit .env.local and add your Gemini API key!
) else (
    echo [OK] .env.local already exists
)

echo.
echo ========================================
echo Next Steps:
echo ========================================
echo 1. Get your Gemini API key from: https://aistudio.google.com/
echo 2. Open .env.local and replace 'your_gemini_api_key_here' with your actual key
echo 3. Run: npm run dev
echo 4. Open your browser to: http://localhost:3000
echo.
echo ========================================
echo.

REM Ask if user wants to start the dev server
set /p START_DEV="Do you want to start the development server now? (y/n): "
if /i "%START_DEV%"=="y" (
    echo.
    echo Starting development server...
    echo Press Ctrl+C to stop the server
    echo.
    call npm run dev
)

pause
