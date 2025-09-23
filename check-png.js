const fs = require('fs');
const buffer = fs.readFileSync('public/ZIION.png');

// Check PNG signature
if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
  // Read width and height from PNG header (at positions 16-24)
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  console.log(`Width: ${width}, Height: ${height}`);
} else {
  console.log('Not a valid PNG file');
}