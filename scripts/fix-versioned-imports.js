import fs from 'fs';
import path from 'path';

function walk(dir, visitor) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, visitor);
    else visitor(full);
  }
}

const targetDir = path.join(process.cwd(), 'src', 'components', 'ui');
const importRegex = /from\s+(["'])([^"']+)@[0-9][^"']*\1/g;

let changed = 0;
walk(targetDir, (filePath) => {
  if (!/\.(ts|tsx)$/.test(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  const next = content.replace(importRegex, 'from $1$2$1');
  if (next !== content) {
    fs.writeFileSync(filePath, next);
    changed += 1;
    console.log(`Updated imports in: ${path.relative(process.cwd(), filePath)}`);
  }
});

console.log(`Done. Files updated: ${changed}`);


