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
    @{ Path = 'img/support/resources.jpg'; Url = "$base/2014/all-the-databases.jpg" },
    @{ Path = 'img/windev/package-windev-2026.png'; Url = "$base/2026/package-windev-2026.png" },
    @{ Path = 'img/windev/900-new-features.png'; Url = "$base/2026/900-new-features.png" },
    @{ Path = 'img/windev/logo_windev-suite_icone.svg'; Url = "$base/2024/logo_windev-suite_icone.svg" },
    @{ Path = 'img/windev/couv-windev.jpg'; Url = "$base/couv/windev.jpg" },
    @{ Path = 'img/windev/compatibility.gif'; Url = "$base/2015/compatibility.gif" },
    @{ Path = 'img/windev/btn_suite.gif'; Url = "$base/home/btn_suite.gif" },
    @{ Path = 'img/windev/download-express-version-free-click-here.jpg'; Url = "$base/express/download-express-version-free-click-here.jpg" },
    @{ Path = 'img/windev/flags/US.gif'; Url = "$base/pays/iso/small/US.gif" },
    @{ Path = 'img/windev/flags/FR.gif'; Url = "$base/pays/iso/small/FR.gif" },
    @{ Path = 'img/windev/flags/ES.gif'; Url = "$base/pays/iso/small/ES.gif" },
    @{ Path = 'img/new-version-update_accueil_mobile.jpg'; Url = "$base/2026/new-version-update_accueil_mobile.jpg" },
    @{ Path = 'img/newfeatures/banner-new-version.jpg'; Url = "$base/2026/new-version-update_accueil.jpg" },
    @{ Path = 'img/newfeatures/hero.png'; Url = "$base/2026/newfeatures/hero.png" },
    @{ Path = 'img/newfeatures/packages-windev-webdev-windev-mobile-2026.png'; Url = "$base/2026/packages-windev-webdev-windev-mobile-2026.png" },
    @{ Path = 'img/newfeatures/nouveau.svg'; Url = "$base/2024/nouveau.svg" },
    @{ Path = 'img/newfeatures/ia-conversationnelle.png'; Url = "$base/2026/newfeatures/ia-conversationnelle.png" },
    @{ Path = 'img/newfeatures/tcd-webdev.png'; Url = "$base/2026/newfeatures/tcd-webdev.png" },
    @{ Path = 'img/newfeatures/audit-de-securite.png'; Url = "$base/2026/newfeatures/audit-de-securite.png" },
    @{ Path = 'img/newfeatures/factur-x.png'; Url = "$base/2026/newfeatures/factur-x.png" },
    @{ Path = 'img/newfeatures/hot-reload.png'; Url = "$base/2026/newfeatures/hot-reload.png" },
    @{ Path = 'img/newfeatures/ia-conversationnelle-dans-votre-app.png'; Url = "$base/2026/newfeatures/ia-conversationnelle-dans-votre-app.png" },
    @{ Path = 'img/newfeatures/code-champ-chat-ia.png'; Url = "$base/2026/newfeatures/code-champ-chat-ia.png" },
    @{ Path = 'img/newfeatures/nouveau-champ-grille.png'; Url = "$base/2026/newfeatures/nouveau-champ-grille.png" },
    @{ Path = 'img/newfeatures/modifieur-plus-riche.png'; Url = "$base/2026/newfeatures/modifieur-plus-riche.png" },
    @{ Path = 'img/newfeatures/gds-historisation-locale.png'; Url = "$base/2026/newfeatures/gds-historisation-locale.png" },
    @{ Path = 'img/newfeatures/editeur-de-palettes.png'; Url = "$base/2026/newfeatures/editeur-de-palettes.png" },
    @{ Path = 'img/newfeatures/openstreetmap.png'; Url = "$base/2026/newfeatures/openstreetmap.png" },
    @{ Path = 'img/newfeatures/debug-wifi-windev-mobile.png'; Url = "$base/2026/newfeatures/debug-wifi-windev-mobile.png" },
    @{ Path = 'img/hfsql/hfsql.png'; Url = "$base/visual/hfsql.png" },
    @{ Path = 'img/hfsql/hfsql-powerful-database.jpg'; Url = "$base/pcsoft/hfsql-powerful-database.jpg" },
    @{ Path = 'img/hfsql/hfsql-cross-platform.jpg'; Url = "$base/pcsoft/hfsql-cross-platform.jpg" },
    @{ Path = 'img/hfsql/img-ebook.gif'; Url = "$base/layout/img-ebook.gif" },
    @{ Path = 'img/hfsql/img-pdf.gif'; Url = "$base/layout/img-pdf.gif" }
)

$pdfDownloads = @(
    @{ Path = 'downloads/windev/wx2026-features-en.pdf'; Url = 'https://us.pcsoft-windev-webdev.com/WX2026-Features.pdf?202510201505' },
    @{ Path = 'downloads/windev/wx2026-features-fr.pdf'; Url = 'https://fr.pcsoft-windev-webdev.com/brochure-WX2026.pdf?202510201505' },
    @{ Path = 'downloads/windev/windev-brochure-en.pdf'; Url = 'https://us.pcsoft-windev-webdev.com/windev-us.pdf?202305241106' },
    @{ Path = 'downloads/windev/windev-brochure-fr.pdf'; Url = 'https://fr.pcsoft-windev-webdev.com/brochureWD2024.pdf?202305231154' },
    @{ Path = 'downloads/windev/windev-brochure-es.pdf'; Url = 'https://es.pcsoft-windev-webdev.com/windev-es.pdf?202305241106' },
    @{ Path = 'img/webdev/package-webdev-2026.png'; Url = "$base/2026/package-webdev-2026.png" },
    @{ Path = 'img/webdev/900-new-features.png'; Url = "$base/2026/900-new-features.png" },
    @{ Path = 'img/webdev/logo-webdev.png'; Url = "$base/logo/logo-webdev.png" },
    @{ Path = 'img/webdev/couv-webdev.jpg'; Url = "$base/couv/webdev.jpg" },
    @{ Path = 'img/webdev/1000-sites.gif'; Url = "$base/sites/1000-sites.gif" },
    @{ Path = 'downloads/webdev/webdev-brochure-en.pdf'; Url = 'https://us.pcsoft-windev-webdev.com/webdev-us.pdf?202305241106' },
    @{ Path = 'downloads/webdev/webdev-brochure-fr.pdf'; Url = 'https://fr.pcsoft-windev-webdev.com/brochureWB2024.pdf?202305231154' },
    @{ Path = 'downloads/webdev/webdev-brochure-es.pdf'; Url = 'https://es.pcsoft-windev-webdev.com/webdev-es.pdf?202305241106' },
    @{ Path = 'img/windev-mobile/package-windev-mobile-2026.png'; Url = "$base/2026/package-windev-mobile-2026.png" },
    @{ Path = 'img/windev-mobile/windev-mobile-available.png'; Url = "$base/2026/windev-mobile-available.png" },
    @{ Path = 'img/windev-mobile/couv-windev-mobile.jpg'; Url = "$base/couv/windev-mobile.jpg" },
    @{ Path = 'img/windev-mobile/logo-windev-mobile.png'; Url = "$base/logo/logo-windev-mobile.png" },
    @{ Path = 'downloads/windev-mobile/windev-mobile-brochure-en.pdf'; Url = 'https://us.pcsoft-windev-webdev.com/windev-mobile-us.pdf?202305241106' },
    @{ Path = 'downloads/windev-mobile/windev-mobile-brochure-fr.pdf'; Url = 'https://fr.pcsoft-windev-webdev.com/brochureWM2024.pdf?202305231154' },
    @{ Path = 'downloads/windev-mobile/windev-mobile-brochure-es.pdf'; Url = 'https://es.pcsoft-windev-webdev.com/windev-mobile-es.pdf?202305241106' },
    @{ Path = 'downloads/hfsql/hfsql-us.pdf'; Url = 'https://us.pcsoft-windev-webdev.com/hfsql_US.pdf' },
    @{ Path = 'downloads/visuels/universal-access-to-data.pdf'; Url = 'https://us.pcsoft-windev-webdev.com/visuels/universal-access-to-data.pdf?202510211134' },
    @{ Path = 'downloads/visuels/multi-platform-development.pdf'; Url = 'https://us.pcsoft-windev-webdev.com/visuels/multi-platform-development.pdf?202510211134' }
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
foreach ($item in $pdfDownloads) {
    $dest = Join-Path $public $item.Path
    $dir = Split-Path -Parent $dest
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    Write-Host "GET $($item.Url)"
    Invoke-WebRequest -Uri $item.Url -OutFile $dest -UseBasicParsing
}

Write-Host "GET $logoUrl"
Invoke-WebRequest -Uri $logoUrl -OutFile $logoDest -UseBasicParsing

$videoDest = Join-Path $public 'video/newfeatures/conversational-ai-environment.mp4'
$videoDir = Split-Path -Parent $videoDest
if (-not (Test-Path $videoDir)) {
    New-Item -ItemType Directory -Path $videoDir -Force | Out-Null
}
$videoUrl = 'https://windev.com/storage/en_US/videos/newfeatures/2026/conversational-ai-environment.mp4'
Write-Host "GET $videoUrl"
Invoke-WebRequest -Uri $videoUrl -OutFile $videoDest -UseBasicParsing

Write-Host "Done. $($downloads.Count + $pdfDownloads.Count + 2) files."
