import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const galleryDir = process.argv[2] || 'public/projects/astrophotography';
const outputFile = process.argv[3] || path.join(galleryDir, 'index.json');
const allowedExtensions = new Set(['.jpg', '.jpeg', '.png']);

const toFileEntry = (fileName) => {
  const extension = path.extname(fileName).toLowerCase();
  if (!allowedExtensions.has(extension)) {
    return null;
  }

  if (fileName.startsWith('.')) {
    return null;
  }

  return fileName;
};

const generateManifest = async () => {
  const entries = await readdir(galleryDir, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile())
    .map((entry) => toFileEntry(entry.name))
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));

  await writeFile(outputFile, `${JSON.stringify(files, null, 2)}\n`, 'utf8');
  console.log(`Wrote ${files.length} entries to ${outputFile}`);
};

generateManifest().catch((error) => {
  console.error(error);
  process.exit(1);
});
