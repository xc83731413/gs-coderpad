const fs = require('fs');
const path = require('path');
const util = require('util');

// const lib = {};
// lib.baseDir = path.join(__dirname, '/../.data/');
//const readFile = util.promisify(fs.readFile);
const openFile = util.promisify(fs.open);
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const closeFile = util.promisify(fs.close);

class LibFileHandle {
  constructor() {
    this.baseDir = path.join(__dirname, '/../.data/');
  }
  getSavedDataPath(){
    return this.baseDir;
  }
  async create(dir, file, data) {
    const filePath = `${this.baseDir}${dir}/${file}.json`;
    let modeOfOpen = 'wx'; //case of new file it will create new
    if(fs.existsSync(filePath)){
      //return fs.existsSync(filePath);
      modeOfOpen = 'w';
    }
    const fileDescriptor = await openFile(filePath, modeOfOpen);

    if(fileDescriptor) {
      //making data as string
      const strData = JSON.stringify(data);

      //write data to the file
      const fileWriteErr = await writeFile(fileDescriptor, strData);
      if(!fileWriteErr) {
        const closeErr = await closeFile(fileDescriptor); 
        if(!closeErr){
          //callback(false);
          return ('file closed successfully!');
        } else {
          return ('Error closing new file!');
        }
      } else {
        return ('Error writing new file!');
      }

    } else {
      return ('Could not create new file, it may already exist!');
    }
  }

  async read(dir, file) {
    const filePath = `${this.baseDir}${dir}/${file}.json`;
    const readData = await readFile(filePath, 'utf8');
    return readData;
  }

  update(dir, file, data) {
    const filePath = `${this.baseDir}${dir}/${file}.json`;
    const openedFile = fs.openSync(filePath, 'r+');
    if(openedFile) {
      const strData = JSON.stringify(data);

      //truncating the file
      const fileTrunc = fs.ftruncateSync(openedFile);
      console.log(fileTrunc);
      if(!fileTrunc){
        const fileWriteErr = fs.writeFileSync(openedFile, strData);
        if(!fileWriteErr && !fs.closeSync(openedFile)){
          console.log('file updated successfully!');
        }
      }
    }
  }

  delete(dir, file){
    const filePath = `${this.baseDir}${dir}/${file}.json`;
    const unlinkFile = fs.unlinkSync(filePath);
    if(!unlinkFile){
      console.log('file deleted');
    }
  }
}

module.exports = LibFileHandle;