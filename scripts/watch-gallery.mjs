import chokidar from 'chokidar';
import { spawn } from 'child_process';
import path from 'path';

// Watch multiple photo topic folders
const photoTopics = ['astro', 'landscape', 'animal', 'cars', 'street', 'aerial'];
const galleryDirs = photoTopics.map(topic => `public/projects/${topic}`);
const debounceTimers = new Map();

const generateManifest = (galleryDir) => {
  console.log(`[${new Date().toLocaleTimeString()}] Generating manifest for ${path.basename(galleryDir)}...`);
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
const scheduleGeneration = (galleryDir) => {
  const existingTimer = debounceTimers.get(galleryDir);
  if (existingTimer) {
    clearTimeout(existingTimer);
  }
  const timer = setTimeout(() => generateManifest(galleryDir), 300);
  debounceTimers.set(galleryDir, timer);
};

// Create watchers for all gallery directories
galleryDirs.forEach(galleryDir => {
  const watcher = chokidar.watch(galleryDir, {
    ignored: /^\./,
    persistent: true,
    awaitWriteFinish: {
      stabilityThreshold: 500,
      pollInterval: 100,
    },
  });

  console.log(`Watching ${galleryDir} for changes...`);

  watcher.on('add', (file) => {
    console.log(`[ADD] ${galleryDir}: ${path.basename(file)}`);
    scheduleGeneration(galleryDir);
  });

  watcher.on('unlink', (file) => {
    console.log(`[DELETE] ${galleryDir}: ${path.basename(file)}`);
    scheduleGeneration(galleryDir);
  });

  watcher.on('error', (error) => {
    console.error(`Watcher error (${galleryDir}): ${error}`);
  });
});

console.log('Press Ctrl+C to stop.\n');
