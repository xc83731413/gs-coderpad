//import http from 'http';
const http = require('http');
const https = require('https');
const url = require('url');
const { StringDecoder } = require('string_decoder');
const fs = require('fs');
const os = require('os');

const config = require('./config');
const fileOpt = require('./lib/custom-file-handling');


//file handling custom operations
const FileHandle = require('./lib/data');
const fileHandle = new FileHandle();

const httpServer = http.createServer((req, res) => {
  unifiedServer(req, res);
  // fileOpt.create('init', 'init', {name: 'koushik'}, (msg) => {
  //   console.log(msg, 'fired');
  // });

  fileHandle.create('init', 'moose', {name: 'test-only'}).then((msg) => {
    if(msg)
      console.log(msg);
  }).catch( error => console.log(error));
});



httpServer.listen(config.httpPort, () => {  
  console.log(`initial server started port: ${config.httpPort}`);
  console.log(os.userInfo());
});

const httpsServerOptions = {
  'key': fs.readFileSync('./https/key.pem'),
  'cert': fs.readFileSync('./https/cert.pem')
};

const httpsServer = https.createServer(httpsServerOptions, (req, res) => {
  unifiedServer(req, res);
})
httpsServer.listen(config.httpsPort, () => {
  fileHandle.read('init', 'moose').then((msg) => {
    console.log(msg);
    updateFileData('init', 'moose');
  }).catch( error => console.log(error));

  console.log(`Initiating https server with port: ${config.httpsPort}`);
})

/**
 * updating file data
 * @param {*} req 
 * @param {*} res 
 */
const updateFileData = async (dir, file) => {
  await fileHandle.update(dir, file, {newName: 'My own name!'});
  deleteFile(dir, file);
};
const deleteFile = (dir, file) => {
  fileHandle.delete(dir, file);
}


const unifiedServer = (req, res) => {
  const pathUrl = url.parse(req.url, true);
  const trimmedPath = pathUrl.path.replace(/^\/+|\/+$/g, '');
  const method = req.method;
  const queryPart = pathUrl.query;
  const headers = req.headers;
  console.log(`url path is: ${pathUrl.path}, and \nmethod is: ${method}, query part is: ${JSON.stringify(queryPart)}`);
  //console.log(`All updated headers: ${JSON.stringify(headers)}`);

  const decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', (data)=>{
    buffer += decoder.write(data);
  })
  req.on('end', () => {
    buffer += decoder.end();
    const chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;
    const data = {
      trimmedPath,
      queryPart,
      method,
      headers,
      payload: buffer
    };
    chosenHandler(data, (statusCode, payload) => {
      statusCode = typeof(statusCode) == 'number' ? statusCode : 200;
      payload = typeof(payload) == 'object' ? payload : {};

      const payloadString = JSON.stringify(payload);

      res.setHeader('Content-Type', 'application/json');
      res.writeHead(statusCode);
      res.end(payloadString);
      console.log(`Existing payload: ${buffer}`);
    })

    // res.end('Initial request server');
    // console.log(`Existing payload: ${buffer}`);
  });
};

const handlers = {
  sample: (data, callback) => {
    callback(406, {name: 'sample handler'});
  },
  ping: (data, callback) => {
    callback(200);
  },
  notFound: (data, callback) => {
    callback(404);
  }
};
const router = {
  'sample': handlers.sample,
  'ping': handlers.ping
};