const { downloadSpecificImages, createNeededImages } = require("../create-images");

syncNewestData();
async function syncNewestData() {
  try {
    await downloadSpecificImages();
    console.log("Successfully downloaded all app images.");
    process.exit();
  } catch (err) {
    process.exit(1);
  }
}
