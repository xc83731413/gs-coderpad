//import http from 'http';
const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');
const config = require('./config');

const server = http.createServer((req, res) => {

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
  
});


server.listen(config.port, () => {
  console.log(`initial server started port: ${config.port}`);
});

const handlers = {
  sample: (data, callback) => {
    callback(406, {name: 'sample handler'});
  },
  notFound: (data, callback) => {
    callback(404);
  }
};
const router = {
  'sample': handlers.sample
};