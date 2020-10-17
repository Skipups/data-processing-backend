// HTTP server with one API endpoint /api/resports. Serves the education.json file created by the parsing script

const http= require('http')
const fs= require('fs')

const server= http.createServer(handler)

function handler(request, response){
  if(request.url === "/api/reports"){
    response.writeHead(200, {'Content-Type': 'application/json'});

    const json= fs.readFileSync('./data/processed/education.json', 'utf8');
    response.end(json)
  } else if(request.url === "/api/hi-there"){
    response.writeHead(200,{'Constent-type': 'application/json'});
    const json={"hello":"there"}
    response.end(JSON.stringify(json))

  }
  
  else{
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end("Error: Requested resource not found.");
  }
}

server.listen(3000, 'localhost')
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer(handler);

// function handler(request, response) {
//   if (request.url === "/api/reports") {
//     response.writeHead(200, {'Content-Type': 'application/json'});

//     const json = fs.readFileSync('./data/processed/education.json', 'utf8');

//     response.end(json);
//   } else {
//     response.writeHead(404, {'Content-Type': 'text/plain'});
//     response.end("Error: Requested resource not found.");
//   }
// }

// server.listen(3000, 'localhost');