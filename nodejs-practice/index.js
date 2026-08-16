const http = require('http');

const server = http.createServer(function(req, res) {
    if(req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.end("Welcome to User Server");
    } else if (req.url === '/users' && req.method === 'GET') {
        res.statusCode = 200;
        res.end("Users Page");
    } else if (req.url === '/profile' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>Profile Page</h1>\n<p>Welcome to the profile page!</p>");
    } else if (req.url === '/' && req.method === 'POST') {
        res.statusCode = 405;
        res.end("Method Not Allowed");
    } else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
});

const port = 3000;

server.listen(port, function() {
    console.log(`Server is running on port http://localhost:${port}`);
});