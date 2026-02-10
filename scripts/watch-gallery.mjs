import chokidar from 'chokidar';
import { spawn } from 'child_process';
import path from 'path';

const galleryDir = process.argv[2] || 'public/projects/astrophotography';
let debounceTimer = null;

const generateManifest = () => {
  console.log(`[${new Date().toLocaleTimeString()}] Generating gallery manifest...`);
  const child = spawn('node', ['scripts/generate-gallery-manifest.mjs', galleryDir]);

  child.stdout.on('data', (data) => {
    console.log(`  ${data.toString().trim()}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`  ERROR: ${data.toString().trim()}`);
  });

  child.on('error', (error) => {
    console.error(`  Failed to run generator: ${error.message}`);
  });
};

// Debounce rapid file changes (e.g., bulk copy operations)
const scheduleGeneration = () => {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }
  debounceTimer = setTimeout(generateManifest, 300);
};

const watcher = chokidar.watch(galleryDir, {
  ignored: /^\./,
  persistent: true,
  awaitWriteFinish: {
    stabilityThreshold: 500,
    pollInterval: 100,
  },
});

console.log(`Watching ${galleryDir} for changes...`);
console.log('Press Ctrl+C to stop.\n');

watcher.on('add', (file) => {
  console.log(`[ADD] ${path.basename(file)}`);
  scheduleGeneration();
});

watcher.on('unlink', (file) => {
  console.log(`[DELETE] ${path.basename(file)}`);
  scheduleGeneration();
});


watcher.on('error', (error) => {
  console.error(`Watcher error: ${error}`);
});
