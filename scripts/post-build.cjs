// Copies the Cloudflare Worker into dist/client/_worker.js for Pages advanced mode.
// Handles two environments:
//   - Local / some CI: single worker-entry bundle in dist/server/assets/
//   - Cloudflare CI:   server.js + split chunks in dist/server/assets/
const fs = require("fs");
const path = require("path");

const serverAssetsDir = "dist/server/assets";
const clientAssetsDir = "dist/client/assets";
const clientDir = "dist/client";

// --- 1. Find the worker entry ---
let workerSrc = null;

// Check for a monolithic worker-entry bundle first
if (fs.existsSync(serverAssetsDir)) {
  const entry = fs.readdirSync(serverAssetsDir).find((f) => f.startsWith("worker-entry"));
  if (entry) workerSrc = path.join(serverAssetsDir, entry);
}

// Fall back to server.js (Cloudflare CI environment)
if (!workerSrc && fs.existsSync("dist/server/server.js")) {
  workerSrc = "dist/server/server.js";
}

if (!workerSrc) {
  console.error("post-build: no worker entry found in dist/server/");
  process.exit(1);
}

// --- 2. Copy worker entry → _worker.js ---
fs.copyFileSync(workerSrc, path.join(clientDir, "_worker.js"));
console.log(`post-build: copied ${workerSrc} → dist/client/_worker.js`);

// --- 3. Copy all server-side JS chunks to dist/client/assets so imports resolve ---
if (fs.existsSync(serverAssetsDir)) {
  for (const file of fs.readdirSync(serverAssetsDir)) {
    if (file.endsWith(".js")) {
      const dest = path.join(clientAssetsDir, file);
      if (!fs.existsSync(dest)) {
        fs.copyFileSync(path.join(serverAssetsDir, file), dest);
      }
    }
  }
  console.log("post-build: merged server JS chunks → dist/client/assets/");
}

// --- 4. Delete dist/client/wrangler.json — root wrangler.toml handles compat flags ---
const generatedWrangler = path.join(clientDir, "wrangler.json");
if (fs.existsSync(generatedWrangler)) {
  fs.unlinkSync(generatedWrangler);
  console.log("post-build: removed dist/client/wrangler.json (root wrangler.toml handles config)");
}

// --- 5. Remove .wrangler/deploy/config.json — stale pointer from vite plugin ---
const deployConfig = path.join(".wrangler", "deploy", "config.json");
if (fs.existsSync(deployConfig)) {
  fs.unlinkSync(deployConfig);
  console.log("post-build: removed .wrangler/deploy/config.json");
}

console.log("post-build: done ✓");
