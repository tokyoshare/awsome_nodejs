import fs from 'fs';
// Base64 image string
let base64String = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA'; 
// Remove header
let base64Image = base64String.split(';base64,').pop();
// Write file
fs.writeFile('image.png', base64Image, {encoding: 'base64'}, function(err) {
    console.log('File created');
});