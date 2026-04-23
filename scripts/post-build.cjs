// Copies the bundled Cloudflare Worker entry into dist/client/_worker.js
// so Cloudflare Pages serves it in advanced mode (full-stack SSR).
const fs = require("fs");

const workerFiles = fs
  .readdirSync("dist/server/assets")
  .filter((f) => f.startsWith("worker-entry"));

if (workerFiles.length === 0) {
  console.error("post-build: no worker-entry file found in dist/server/assets");
  process.exit(1);
}

const src = `dist/server/assets/${workerFiles[0]}`;
const dest = "dist/client/_worker.js";
fs.copyFileSync(src, dest);
console.log(`post-build: copied ${src} → ${dest}`);
