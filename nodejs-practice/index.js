const http = require('http');
const fs = require('fs');
const path = require('path');


const homePage = fs.readFileSync('./views/index.html');
const contactPage = fs.readFileSync('./views/contact.html');

const server = http.createServer(function(req, res) {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(homePage);
    } else if(req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(contactPage);
    }
});

const port = process.env.PORT || 3000;

server.listen(port, function() {
    console.log(`server running on: http://localhost:${port}`);
})