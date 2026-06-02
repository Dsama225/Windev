import fs from 'fs';

const html = fs.readFileSync('storage/windev-distributors.html', 'utf8');
const regions = [];

for (const part of html.split('bg-wd text-xl').slice(1)) {
    const nameMatch = part.match(/>([^<]+)<\/td>/);
    if (!nameMatch) continue;
    const region = nameMatch[1].trim();
    const chunk = part.split('bg-wd')[0];
    const countries = [...chunk.matchAll(/href="([^"]+)"[^>]*>([^<]+)</g)]
        .map((m) => ({ href: m[1], label: m[2].trim() }))
        .filter((l) => l.label && !l.label.includes('fa '));
    regions.push({ region, countries });
}

fs.writeFileSync('resources/js/data/distributorRegions.json', JSON.stringify(regions, null, 2));
console.log(`Wrote ${regions.length} regions`);
