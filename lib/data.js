const fs = require('fs');
const path = require('path');
const util = require('util');

// const lib = {};
// lib.baseDir = path.join(__dirname, '/../.data/');
//const readFile = util.promisify(fs.readFile);
const openFile = util.promisify(fs.open);
const writeFile = util.promisify(fs.writeFile);
const closeFile = util.promisify(fs.close);

class LibFileHandle {
  constructor() {
    this.baseDir = path.join(__dirname, '/../.data/');
  }
  getSavedDataPath(){
    return this.baseDir;
  }
  async create(dir, file, data, callback = null) {
    const fileDescriptor = await openFile(`${this.baseDir}${dir}/${file}.json`, 'wx');    
    //return !err ? fileDescriptor : err;
    if(fileDescriptor) {
      //making data as string
      const strData = JSON.stringify(data);

      //write data to the file
      const fileWriteErr = await writeFile(fileDescriptor, strData);
      if(!fileWriteErr) {
        const closeErr = await closeFile(fileDescriptor); 
        if(!closeErr){
          //callback(false);
          console.log('file closed successfully!');
        } else {
          console.log('Error closing new file!');
        }
      } else {
        console.log('Error writing new file!');
      }

    } else {
      console.log('Could not create new file, it may already exist!');
    }
  }
}

module.exports = LibFileHandle;