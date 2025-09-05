#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

// 1) Clean build outputs if exist
const removeIfExists = (p) => {
  if (fs.existsSync(p)) {
    fs.rmSync(p, { recursive: true, force: true });
    console.log('Removed', p);
  }
};

removeIfExists(path.join(root, '.next'));
removeIfExists(path.join(root, 'out'));
removeIfExists(path.join(root, '.turbo'));
removeIfExists(path.join(root, '.vercel'));

// 2) Ensure public/images exists
const imagesDir = path.join(root, 'public', 'images');
fs.mkdirSync(imagesDir, { recursive: true });

// 3) Create a lightweight React-only bundle folder
const outDir = path.join(root, 'handoff-react-only');
removeIfExists(outDir);
fs.mkdirSync(outDir, { recursive: true });

// copy directories helper
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

// include components and public images
copyDir(path.join(root, 'components'), path.join(outDir, 'components'));
copyDir(path.join(root, 'public', 'images'), path.join(outDir, 'public', 'images'));

// minimal README
fs.writeFileSync(
  path.join(outDir, 'README.md'),
  `# React-only Components

이 폴더는 퍼블리싱 컴포넌트만 담은 묶음입니다.

- 스타일: Tailwind v4 사용 권장 (전역: @import "tailwindcss")
- 이미지: /public/images 경로 유지
- 예시 컨테이너: components/Container.tsx

`,
  'utf8'
);

console.log('Handoff bundle prepared at:', outDir);


