# Elden Ring Mod Downloader Script
Write-Host "Elden Ring Mod Downloader" -ForegroundColor Green
Write-Host "=========================" -ForegroundColor Green

# Create downloads directory
if (!(Test-Path "Downloads")) {
    New-Item -ItemType Directory -Name "Downloads"
}

# Download Mod Engine 2 (already done)
Write-Host "✓ Mod Engine 2 bereits heruntergeladen" -ForegroundColor Green

# Download links for popular mods
$mods = @{
    "Convergence" = "https://www.nexusmods.com/eldenring/mods/3419"
    "MinimalistHUD" = "https://www.nexusmods.com/eldenring/mods/1100"
    "NoIntroLogos" = "https://www.nexusmods.com/eldenring/mods/58"
    "EldenReshade" = "https://www.nexusmods.com/eldenring/mods/48"
}

Write-Host "`nMod Download Links:" -ForegroundColor Yellow
foreach ($mod in $mods.GetEnumerator()) {
    Write-Host "• $($mod.Key): $($mod.Value)" -ForegroundColor Cyan
}

Write-Host "`n⚠️  Hinweis: Nexus Mods erfordert manuellen Download" -ForegroundColor Red
Write-Host "Bitte lade die Mods manuell von den obigen Links herunter" -ForegroundColor Yellow
Write-Host "und entpacke sie in die entsprechenden Ordner:" -ForegroundColor Yellow
Write-Host "• Convergence → ModEngine2\mod\convergence\" -ForegroundColor White
Write-Host "• HUD/Logos → ModEngine2\mod\menu\" -ForegroundColor White

Write-Host "`n✅ Mod Engine 2 Setup bereit!" -ForegroundColor Green 