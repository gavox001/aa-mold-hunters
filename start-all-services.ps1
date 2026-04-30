# AA Mold Hunter - Start All Services
# Puertos: API=3000, Web=3001, Web2=3002, Web3=3003, Web4=3004

$ErrorActionPreference = "Continue"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "AA Mold Hunter - Starting All Services" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$services = @(
  @{ Name="API"; Port=3000; Dir="C:\wamp64\www\aamold-hunter\apps\api"; Cmd="npm run start" },
  @{ Name="Web"; Port=3001; Dir="C:\wamp64\www\aamold-hunter\apps\web"; Cmd="npm run dev" },
  @{ Name="Web2"; Port=3002; Dir="C:\wamp64\www\aamold-hunter\apps\web2"; Cmd="npm run dev" },
  @{ Name="Web3"; Port=3003; Dir="C:\wamp64\www\aamold-hunter\apps\web3"; Cmd="npm run dev" },
  @{ Name="Web4"; Port=3004; Dir="C:\wamp64\www\aamold-hunter\apps\web4"; Cmd="npm run dev" }
)

$running = @()

foreach ($svc in $services) {
  $portCheck = Get-NetTCPConnection -LocalPort $svc.Port -ErrorAction SilentlyContinue
  if ($portCheck) {
    Write-Host "[SKIP] $($svc.Name) already running on port $($svc.Port)" -ForegroundColor Yellow
    $running += $svc.Name
    continue
  }

  Write-Host "[START] $($svc.Name) on port $($svc.Port)..." -ForegroundColor Green
  Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$($svc.Dir)'; $($svc.Cmd)" -WindowStyle Normal
  Start-Sleep -Seconds 2
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Services Summary" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "API:     http://localhost:3000" -ForegroundColor White
Write-Host "Web:     http://localhost:3001" -ForegroundColor White
Write-Host "Web2:    http://localhost:3002" -ForegroundColor White
Write-Host "Web3:    http://localhost:3003" -ForegroundColor White
Write-Host "Web4:    http://localhost:3004" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C to stop all services" -ForegroundColor Yellow