const { createNeededImages } = require('../create-images');

syncNewestData();
async function syncNewestData() {
  try {
    await createNeededImages();
    console.log('Fertig');
    process.exit();
  } catch (err) {
    process.exit(1);
  }
}
