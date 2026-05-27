import { readFileSync, writeFileSync } from 'fs';

let html = readFileSync('docs/index.html', 'utf8');

// Find the script tag
let scriptStart = html.indexOf('<script');
let scriptEnd = html.indexOf('</script>', scriptStart) + 9;

// Extract script tag and remove it from its position
let scriptTag = html.substring(scriptStart, scriptEnd);
html = html.substring(0, scriptStart) + html.substring(scriptEnd);

// Clean up the tag
scriptTag = scriptTag.replace(' type="module"', '').replace(' defer', '');

// Insert it right before </body>
let bodyEnd = html.lastIndexOf('</body>');
html = html.substring(0, bodyEnd) + scriptTag + html.substring(bodyEnd);

writeFileSync('docs/index.html', html);
