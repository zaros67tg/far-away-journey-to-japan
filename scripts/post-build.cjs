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

// --- 4. Replace generated wrangler.json with a minimal valid version ---
// The generated one has many unknown fields that break Pages' parser.
// We keep just the fields needed to enable nodejs_compat for the _worker.js.
const generatedWrangler = path.join(clientDir, "wrangler.json");
const minimalWrangler = {
  name: "tanstack-start-app",
  compatibility_date: "2025-09-24",
  compatibility_flags: ["nodejs_compat"],
};
fs.writeFileSync(generatedWrangler, JSON.stringify(minimalWrangler, null, 2));
console.log("post-build: wrote minimal wrangler.json with nodejs_compat");

// --- 5. Remove .wrangler/deploy/config.json — it points to the old wrangler.json ---
const deployConfig = path.join(".wrangler", "deploy", "config.json");
if (fs.existsSync(deployConfig)) {
  fs.unlinkSync(deployConfig);
  console.log("post-build: removed .wrangler/deploy/config.json");
}

console.log("post-build: done ✓");
