# Downloads PC SOFT images used by Express, Redistributable, Subscribe and Support pages.
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$public = Join-Path $root 'public'
$base = 'https://windev.com/storage/en_US/img'

$downloads = @(
    @{ Path = 'img/home/cross-plateformes.png'; Url = "$base/home/cross-plateformes.png" },
    @{ Path = 'img/2026/packages-windev-webdev-windev-mobile-2026.png'; Url = "$base/2026/packages-windev-webdev-windev-mobile-2026.png" },
    @{ Path = 'img/2026/package-windev.png'; Url = "$base/2026/package-windev.png" },
    @{ Path = 'img/2026/package-webdev.png'; Url = "$base/2026/package-webdev.png" },
    @{ Path = 'img/2026/package-windev-mobile.png'; Url = "$base/2026/package-windev-mobile.png" },
    @{ Path = 'img/2026/logo-jaune.png'; Url = "$base/2026/logo-jaune.png" },
    @{ Path = 'img/redistribution-img/logo-windev.png'; Url = "$base/visual/logo-windev.png" },
    @{ Path = 'img/redistribution-img/logo-webdev.png'; Url = "$base/visual/logo-webdev.png" },
    @{ Path = 'img/redistribution-img/logo-windev-mobile.png'; Url = "$base/visual/logo-windev-mobile.png" },
    @{ Path = 'img/redistribution-img/logo-pcsoft.png'; Url = "$base/visual/logo-pcsoft.png" },
    @{ Path = 'img/redistribution-img/package-windev.png'; Url = "$base/2026/package-windev.png" },
    @{ Path = 'img/redistribution-img/package-webdev.png'; Url = "$base/2026/package-webdev.png" },
    @{ Path = 'img/redistribution-img/package-windev-mobile.png'; Url = "$base/2026/package-windev-mobile.png" },
    @{ Path = 'img/redistribution-img/logo-jaune.png'; Url = "$base/2026/logo-jaune.png" },
    @{ Path = 'img/redistribution-img/packages-windev-webdev-windev-mobile-2026.png'; Url = "$base/2026/packages-windev-webdev-windev-mobile-2026.png" },
    @{ Path = 'img/redistribution-img/hfsql.png'; Url = "$base/visual/hfsql.png" },
    @{ Path = 'img/home/neo-fond.jpg'; Url = "$base/2024/neo-fond.jpg" },
    @{ Path = 'img/home/nouveau.svg'; Url = "$base/2024/nouveau.svg" },
    @{ Path = 'img/home/logo_windev-suite_texte-noir-light.svg'; Url = "$base/2024/logo_windev-suite_texte-noir-light.svg" },
    @{ Path = 'img/home/fond_cross-plateformes_1.png'; Url = "$base/2025/fond_cross-plateformes_1.png" },
    @{ Path = 'img/home/new-version-update_accueil.jpg'; Url = "$base/2026/new-version-update_accueil.jpg" },
    @{ Path = 'img/home/all-the-databases.jpg'; Url = "$base/2014/all-the-databases.jpg" },
    @{ Path = 'img/home/logo-windev.png'; Url = "$base/logo/logo-windev.png" },
    @{ Path = 'img/home/logo-webdev.png'; Url = "$base/logo/logo-webdev.png" },
    @{ Path = 'img/home/logo-windev-mobile.png'; Url = "$base/logo/logo-windev-mobile.png" },
    @{ Path = 'img/home/windev-available.png'; Url = "$base/2026/windev-available.png" },
    @{ Path = 'img/home/webdev-available.png'; Url = "$base/2026/webdev-available.png" },
    @{ Path = 'img/home/windev-mobile-available.png'; Url = "$base/2026/windev-mobile-available.png" },
    @{ Path = 'img/home/logos/porsche.jpg'; Url = "$base/logos/porsche.jpg" },
    @{ Path = 'img/home/logos/seiko.jpg'; Url = "$base/logos/seiko.jpg" },
    @{ Path = 'img/home/logos/clarins.jpg'; Url = "$base/logos/clarins.jpg" },
    @{ Path = 'img/home/logos/bristol.jpg'; Url = "$base/logos/bristol.jpg" },
    @{ Path = 'img/home/logos/pmf.jpg'; Url = "$base/logos/pmf.jpg" },
    @{ Path = 'img/home/logos/bridgestone.jpg'; Url = "$base/logos/bridgestone.jpg" },
    @{ Path = 'img/home/logos/quiksilver.jpg'; Url = "$base/logos/quiksilver.jpg" },
    @{ Path = 'img/home/logos/johndeere.jpg'; Url = "$base/logos/johndeere.jpg" },
    @{ Path = 'img/home/logos/shell.jpg'; Url = "$base/logos/shell.jpg" },
    @{ Path = 'img/home/logos/segafredo.jpg'; Url = "$base/logos/segafredo.jpg" },
    @{ Path = 'img/home/logos/bollinger.jpg'; Url = "$base/logos/bollinger.jpg" },
    @{ Path = 'img/home/logos/honda.jpg'; Url = "$base/logos/honda.jpg" },
    @{ Path = 'img/home/logos/kenzo.jpg'; Url = "$base/logos/kenzo.jpg" },
    @{ Path = 'img/home/logos/l-oreal.jpg'; Url = "$base/logos/l-oreal.jpg" },
    @{ Path = 'img/home/logos/siemens.jpg'; Url = "$base/logos/siemens.jpg" },
    @{ Path = 'img/support/consulting-video.jpg'; Url = "$base/home/consulting-video.jpg" },
    @{ Path = 'img/support/technical-support.jpg'; Url = "$base/windev/windev.jpg" },
    @{ Path = 'img/support/direct-assistance.png'; Url = "$base/2026/windev-available.png" },
    @{ Path = 'img/support/online-help.png'; Url = "$base/visual/wl.png" },
    @{ Path = 'img/support/faq.gif'; Url = "$base/2014/communaute_email.gif" },
    @{ Path = 'img/support/forums.gif'; Url = "$base/2014/communaute_youtube.gif" },
    @{ Path = 'img/support/online-repository.png'; Url = "$base/2026/packages-windev-webdev-windev-mobile-2026.png" },
    @{ Path = 'img/support/resources.jpg'; Url = "$base/2014/all-the-databases.jpg" }
)

$logoUrl = 'https://logo.assets.pcsoft.fr/svg/LOGO_PCSOFT_Dark.svg'
$logoDest = Join-Path $public 'pcsoft/LOGO_PCSOFT_Dark.svg'

foreach ($item in $downloads) {
    $dest = Join-Path $public $item.Path
    $dir = Split-Path -Parent $dest
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    Write-Host "GET $($item.Url)"
    Invoke-WebRequest -Uri $item.Url -OutFile $dest -UseBasicParsing
}

$logoDir = Split-Path -Parent $logoDest
if (-not (Test-Path $logoDir)) {
    New-Item -ItemType Directory -Path $logoDir -Force | Out-Null
}
Write-Host "GET $logoUrl"
Invoke-WebRequest -Uri $logoUrl -OutFile $logoDest -UseBasicParsing

Write-Host "Done. $($downloads.Count + 1) files."
