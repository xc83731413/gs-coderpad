const fs = require('fs');
const path = require('path');
const util = require('util');

const lib = {};
lib.baseDir = path.join(__dirname, '/../.data/');

lib.create = (dir, file, data, callback) => {
  fs.open(`${lib.baseDir}${dir}/${file}.json`, 'wx', (errOpen, fileDescriptor) => {
    if(!errOpen && fileDescriptor) {
      const strData = JSON.stringify(data);
      fs.writeFile(fileDescriptor, strData, (errWrite) => {
        if(!errWrite) {
          fs.close(fileDescriptor, (errClose) => {
            if(!errClose){
              callback(false);
            } else {
              callback('could not close the file');
            }
          })
        } else {
          callback('Error writing to new file');
        }
      })
    } else {
      callback(`Could not create new file, it may already exist`);
    }
  })
}

module.exports = lib;