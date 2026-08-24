import { copyFile, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const designRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const workspaceRoot = resolve(designRoot, '..');
const source = resolve(designRoot, 'src/styles/aurora-ledger.css');
const targets = ['home', 'blog', 'polaris'].map((repo) =>
  resolve(workspaceRoot, repo, 'src/styles/aurora-ledger.css'),
);
const check = process.argv.includes('--check');
const canonical = await readFile(source, 'utf8');

for (const target of targets) {
  if (check) {
    const current = await readFile(target, 'utf8');
    if (current !== canonical) {
      throw new Error(`Design tokens are out of sync: ${target}`);
    }
  } else {
    await copyFile(source, target);
    console.log(`synced ${target}`);
  }
}

if (check) console.log('Aurora Ledger tokens are synchronized.');
