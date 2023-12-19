const download = require('image-downloader');
const fs = require('fs');
const delay = require('delay');
const Jimp = require('jimp');

exports.downloadSpecificImages = async () => {
  try {
    const appImagesUrls = [
      'https://cdn.shopify.com/app-store/listing_images/7172b0c33b72590b47b8d76d955ccb23/icon/CKaxiPeCqvYCEAE=.png',
      'https://cdn.shopify.com/app-store/listing_images/4b539239b447ba3a783ec53f49272014/icon/CO3A66X0lu8CEAE=.jpg',
      'https://cdn.shopify.com/app-store/listing_images/37bf55147595abb39ada769e9890ceb4/icon/CPCxnrL0lu8CEAE=.png',
      'https://cdn.shopify.com/app-store/listing_images/519f096623bffbab8723db3574fccfce/icon/CIDr2dTPqPUCEAE=.jpeg',
      'https://cdn.shopify.com/app-store/listing_images/a0c2c356e022552d7a68a81ba282b666/icon/CL-bmpKjkPYCEAE=.png',
      'https://cdn.shopify.com/app-store/listing_images/1dadb4bf4d2a6459d9e1958bbd6f7b45/icon/CO7ngaz0lu8CEAE=.jpg',
      'https://cdn.shopify.com/app-store/listing_images/37bf55147595abb39ada769e9890ceb4/icon/CPCxnrL0lu8CEAE=.png',
      'https://cdn.shopify.com/app-store/listing_images/a0c2c356e022552d7a68a81ba282b666/icon/CL-bmpKjkPYCEAE=.png',
      'https://cdn.shopify.com/app-store/listing_images/b86b67ddff9a50c04c70f955780d0de9/icon/COzQ1vuD6PACEAE=.png',
      'https://cdn.shopify.com/app-store/listing_images/cb86583523191f302d08390be3c3915a/icon/CNqA_N2myvMCEAE=.png',
      'https://cdn.shopify.com/app-store/listing_images/3c8dca7a16ce2089dc83c84cfb41aa84/icon/CKjw38H0h_oCEAE=.png',
      'https://cdn.shopify.com/app-store/listing_images/31e959ecfdc66b19c5440569465e4988/icon/CKaMkJuvwoIDEAE=.png',
      'https://cdn.shopify.com/app-store/listing_images/b8bc9d365792ea16185361099864182c/icon/COb3zP2Pwv4CEAE=.png',
      'https://cdn.shopify.com/app-store/listing_images/00d1725603ef779b9b9c74fffd60a7e5/icon/CNmP-8L0lu8CEAE=.png',
      'https://cdn.shopify.com/app-store/listing_images/b9b110c4ca33a51487c510183079ab1d/icon/COPYhIL_tPQCEAE=.jpeg',
      'https://cdn.shopify.com/app-store/listing_images/76b587ef54a0099f6f3dd49e72c09c74/icon/CJ2-1s-K6v4CEAE=.jpeg',
      'https://cdn.shopify.com/app-store/listing_images/5da194592c59cd145b825b53019db33c/icon/CIKipOGl7-8CEAE=.png',
      'https://cdn.shopify.com/app-store/listing_images/94d9a63cdec09cb686ef3df19493797e/icon/CMfSidT0lu8CEAE=.jpg',
      'https://cdn.shopify.com/app-store/listing_images/3fad2990036f3a2fef930edbb930430f/icon/CL2k-bLzo_ICEAE=.png',
      'https://cdn.shopify.com/app-store/listing_images/b6903f5b154ed41f0818a810e4b2a32f/icon/CJiZzKem6vICEAE=.jpeg',
      'https://cdn.shopify.com/app-store/listing_images/44807fc52b5b3e6f24ce355c02dc90a9/icon/CLnM4cz0lu8CEAE=.png',
      'https://cdn.shopify.com/app-store/listing_images/e9bff8786f23649f93049ba30a9d637e/icon/CKiw0PWO_fsCEAE=.jpeg',
      'https://cdn.shopify.com/app-store/listing_images/54fb9eb4e59e94fa0e3b1b173de78ca4/icon/CNnjpLa0g_sCEAE=.png',
      'https://cdn.shopify.com/app-store/listing_images/5edd9000b933a8fa88c152d1e498531f/icon/CP6B2OOv3PYCEAE=.png',
    ];

    for (let index = 0; index < appImagesUrls.length; index++) {
      try {
        const downloadOptionsI = {
          url: appImagesUrls[index],
          dest: `/Users/kenanomic/backgrounds/`, // will be saved to /path/to/dest/image.jpg
        };

        if (downloadOptionsI.url != undefined) {
          const res = await download.image(downloadOptionsI);
          await delay(2800);
        }
      } catch (error) {
        console.log(error);
      }
    }

    let success = true;
    return success;
  } catch (error) {
    console.log(error);
  }
};

exports.createNeededImages = async () => {
  const backroundImagesPaths = [
    'backgrounds/1.png',
    'backgrounds/2.png',
    'backgrounds/3.png',
    'backgrounds/4.png',
    'backgrounds/5.png',
  ];

  let duels = [];

  const folderPath = '/Users/kenanomic/backgrounds/';

  fs.readdir(folderPath, async (err, files) => {
    if (err) {
      console.error('Error reading folder:', err);
      return;
    }

    let duels = files;
    let imageId = 130;

    for (var i = 0; i < duels.length; i++) {
      for (j = 0; j < duels.length; j++) {
        var randomNumber = Math.floor(Math.random() * backroundImagesPaths.length);
        let backroundImagePath = backroundImagesPaths[randomNumber];

        if(duels[i]=='.DS_Store' || duels[j]=='.DS_Store') continue;

        // Select path to app Image and load it

        let appImageI = await Jimp.read('/Users/kenanomic/backgrounds/' + duels[i]);
        let appImageII = await Jimp.read('/Users/kenanomic/backgrounds/' + duels[j]);
        let backroundImage = await Jimp.read(backroundImagePath);

        // resize the image
        appImageI = appImageI.resize(400, 400); // Resizing
        appImageII = appImageII.resize(400, 400); // Resizing

        backroundImage.composite(appImageI, 250, 370, {
          mode: Jimp.BLEND_SOURCE_OVER,
          opacityDest: 1,
          opacitySource: 1,
        });

        backroundImage.composite(appImageII, 1270, 370, {
          mode: Jimp.BLEND_SOURCE_OVER,
          opacityDest: 1,
          opacitySource: 1,
        });

        imageId = imageId + 1;

        await backroundImage.writeAsync(`newbackgrounds/${imageId}.jpeg`);
        await delay(1000);
      }
    }
  });
  return 0;
};
