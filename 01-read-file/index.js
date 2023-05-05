const fs = require('fs')
const path = require('path')

const newText = new fs.ReadStream(path.join(__dirname, 'text.txt'), 'utf-8');

newText.on('data', function(chunk){
    console.log(chunk);
}
);