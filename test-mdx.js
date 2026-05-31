const fs = require('fs');
const content = fs.readFileSync('/Users/sahilbagul/Desktop/s/Anti-gravity/_sandbox/our website/dental-invictus-ai-site/content/blog/practo-vs-own-website-dental-clinic.mdx', 'utf8');
console.log(content.includes('headers={["Factor", "Practo", "Own Website"]}'));
