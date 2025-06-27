@echo off
REM === CONFIG ===
set REPO_NAME=JardimDaLua
set BRANCH=gh-pages

echo.
echo =========== ATUALIZANDO VITE.CONFIG.TS ===========
powershell -Command "(Get-Content vite.config.ts) -replace 'base:.*?,', 'base: ''/%REPO_NAME%/'',' | Set-Content vite.config.ts"

echo.
echo =========== RODANDO BUILD ===========
npm install
npm run build

echo.
echo =========== INICIANDO DEPLOY ===========
git checkout --orphan %BRANCH%
git rm -rf .

xcopy dist . /E /H /C /Y

git add .
git commit -m "Deploy to GitHub Pages"
git push origin %BRANCH% --force

echo.
echo =========== DEPLOY FINALIZADO ===========
echo ✅ Acesse: https://SEU_USUARIO.github.io/%REPO_NAME%/
pause
