// News-image entry for make.fun: "Sum up 24 November's world news in one image".
// The program writes one image to /output/entry.png. It copies the poster
// rendered in this repository (entry.png, a 1024x1024 PNG of Tuesday
// 24 November 2026's world news) into the output directory.
//
// Deterministic: the same input bytes are copied on every run, so two runs
// write byte-identical files. No network is used at any point.
// Node 22, standard library only.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
