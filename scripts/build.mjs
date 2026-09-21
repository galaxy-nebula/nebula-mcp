#!/usr/bin/env node
import { cpSync, rmSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const pkgRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(pkgRoot, 'dist');

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(join(pkgRoot, 'data'), join(dist, 'data'), { recursive: true });
cpSync(join(pkgRoot, 'src', 'index.js'), join(dist, 'index.js'));
console.log('dist assembled: index.js + data/');
