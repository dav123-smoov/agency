/**
 * compress-images.mjs
 * Compresses all images in src/assets using sharp via a temp file.
 */

import sharp from 'sharp';
import { readdir, stat, rename, copyFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_ASSETS = join(__dirname, 'src/assets');
const PUBLIC_DIR = join(__dirname, 'public');

const files = await readdir(SRC_ASSETS);
let totalSaved = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

  const inputPath  = join(SRC_ASSETS, file);
  const outputPath = inputPath + '.tmp';
  const before = (await stat(inputPath)).size;

  if (ext === '.png') {
    await sharp(inputPath)
      .png({ quality: 80, compressionLevel: 9, effort: 10 })
      .toFile(outputPath);
  } else {
    await sharp(inputPath)
      .jpeg({ quality: 78, progressive: true, mozjpeg: true })
      .toFile(outputPath);
  }

  // Replace original with compressed version
  await rename(outputPath, inputPath);

  // Mirror to public/ if a copy exists there
  const publicPath = join(PUBLIC_DIR, file);
  try {
    await stat(publicPath);
    await copyFile(inputPath, publicPath);
  } catch { /* not in public – skip */ }

  const after = (await stat(inputPath)).size;
  const saved = before - after;
  totalSaved += saved;
  const arrow = saved > 0 ? '↓' : '→';
  console.log(
    `✓ ${file.padEnd(36)} ${(before/1024).toFixed(0).padStart(5)}KB ${arrow} ${(after/1024).toFixed(0).padStart(5)}KB  (saved ${Math.max(0,(saved/1024)).toFixed(0)}KB)`
  );
}

console.log(`\n✅ Done — total saved: ${(Math.max(0,totalSaved)/1024).toFixed(0)} KB`);
