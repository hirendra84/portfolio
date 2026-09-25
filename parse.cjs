const fs = require('fs');
const html = fs.readFileSync('C:/Users/KIIT0001/.gemini/antigravity-ide/brain/e60bcdae-5489-49c0-9501-4f02b7d2d81c/.system_generated/steps/531/content.md', 'utf8');
const titleMatch = html.match(/<meta property="og:title" content="([^"]+)"/i);
const imgMatch = html.match(/<meta property="og:image" content="([^"]+)"/i);
const descMatch = html.match(/<meta property="og:description" content="([^"]+)"/i);
console.log('Title:', titleMatch ? titleMatch[1] : null);
console.log('Image:', imgMatch ? imgMatch[1] : null);
console.log('Desc:', descMatch ? descMatch[1] : null);
