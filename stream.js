const fs = require('fs');

const readStream = fs.createReadStream('./docs/docs2.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/docs3.txt');

readStream.on('data', (chunk) => {
    console.log('---CHUNK---');
    console.log(chunk);

    writeStream.write('\nNEW CHUK\n')
    writeStream.write(chunk);
})