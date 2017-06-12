const http = require('http');
const port = 9090;
const hostname = "localhost";
const fs = require('fs');


function onRequest(request,response)
{
	 request.on('readable', function () {
	       request.read(); // throw away the data
	   });

	   request.on('end', function () {

	      response.writeHead(200, {
	         'Content-Type': 'text/html'
	      });
	      var body =fs.readFileSync("index.html");
	      response.write(body);
	      response.end();
	   });
}

const server = http.createServer(onRequest).listen(9090);
server.listen(port,hostname, ()=>{
	
	console.log('server started' +hostname+":"+ port);
});