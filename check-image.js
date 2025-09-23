const { imageSize } = require('image-size');
const dimensions = imageSize('public/ZIION.png');
console.log(`Width: ${dimensions.width}, Height: ${dimensions.height}`);