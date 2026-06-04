const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const required = [
  "index.html",
  "404.html",
  "server.js",
  "assets/figma-guide-logo.png",
  "assets/figma-guide-favicon-blue.png",
  "assets/figma-product-favicon-red.png",
  "assets/digital-twin-20.png",
  "assets/digital-twin-30.png",
  "assets/mos-data.png",
  "assets/enigma.png",
  "assets/metapolis.png",
  "assets/internal-instructions.png"
];

const missing = required.filter((file) => !fs.existsSync(path.join(root, file)));
if (missing.length) {
  console.error("Missing required files:");
  missing.forEach((file) => console.error(`- ${file}`));
  process.exit(1);
}

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const checks = [
  ["base path helper", "function withBasePath"],
  ["route parser", "function getAppPathname"],
  ["assets folder", "const assets = \"assets/\""],
  ["home route", "/home"],
  ["dot grid", "function initDotGrid"],
  ["lucide icons", "lucide.createIcons"]
];

const failed = checks.filter(([, needle]) => !html.includes(needle));
if (failed.length) {
  console.error("HTML smoke checks failed:");
  failed.forEach(([name]) => console.error(`- ${name}`));
  process.exit(1);
}

console.log("Project check passed.");
