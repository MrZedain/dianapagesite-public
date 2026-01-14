const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// === CONFIGURATION ===
const COLLECTION_PATH = path.join(process.cwd(), "public/collections/performance"); 
const LOWRES_WIDTH = 48;
const LOWRES_QUALITY = 40;
// ====================

// Make the lowres folder if it doesn't exist
const lowresDir = path.join(COLLECTION_PATH, "lowres");
if (!fs.existsSync(lowresDir)) fs.mkdirSync(lowresDir);

// Read all files in the collection folder
const files = fs.readdirSync(COLLECTION_PATH);

files.forEach((file) => {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) return;

  const inputPath = path.join(COLLECTION_PATH, file);
  const outputPath = path.join(lowresDir, file);

  sharp(inputPath)
    .resize({ width: LOWRES_WIDTH })
    .jpeg({ quality: LOWRES_QUALITY })
    .toFile(outputPath)
    .then(() => console.log("✓", `lowres/${file}`))
    .catch(console.error);
});
