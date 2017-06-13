const http = require('http');
const port = 9090;
const hostname = "localhost";
const fs = require('fs');
const express = require('express');
const app = express();

function onRequest(request,response)
{
	
	 request.on('readable', function () {
	       request.read(); // throw away the data
	   });

	   request.on('end', function () {

	     
	      analyseUrl(request.url,response);
	   });
}
function analyseUrl(url,response)
{
	switch (url){
		case '/menu':
			response.writeHead(200, {
		         'Content-Type': 'text/json'
		      });
			  var body = fs.readFileSync("menu.json");
		      response.write(body);
		      response.end();
		break;
		case '/index':
			 response.writeHead(200, {
		         'Content-Type': 'text/html'
		      });
			 var body =fs.readFileSync("index.html");
		      response.write(body);
		      response.end();
		break;
	}
}
const server = http.createServer(onRequest).listen(9090);

server.listen(port,hostname, ()=>{
	
	console.log('server started' +hostname+":"+ port);
});