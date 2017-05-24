'use strict';
const http = require('http');
http
    .createServer((req,res) =>{
      res.writeHead(200,{'content-type':'text/html'});
      res.end('<h1>Hello  and Welcome to node js !!! </h1>');
    })
      .listen( 3000 , ()=> console.log('Server is up and running on port 3000'));
