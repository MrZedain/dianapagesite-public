const fs = require("fs");
const path = require("path");
const sizeOf = require("image-size").default || require("image-size");

// Folder containing your images
const IMAGES_FOLDER = path.join(__dirname, "../public/collections/dwellers");

// Supported image extensions
const IMAGE_EXTS = [".jpg", ".jpeg", ".png", ".webp"];

fs.readdir(IMAGES_FOLDER, { withFileTypes: true }, (err, entries) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  entries.forEach((entry) => {
    if (!entry.isFile()) return; // skip directories
    const ext = path.extname(entry.name).toLowerCase();
    if (!IMAGE_EXTS.includes(ext)) return; // skip unsupported files

    const filePath = path.join(IMAGES_FOLDER, entry.name);

    try {
      // Read the file into a Buffer
      const buffer = fs.readFileSync(filePath);
      const dimensions = sizeOf(buffer); // pass buffer instead of path
      console.log(`${entry.name}: width=${dimensions.width}, height=${dimensions.height}`);
    } catch (error) {
      console.warn(`Skipping ${entry.name}:`, error.message);
    }
  });
});
