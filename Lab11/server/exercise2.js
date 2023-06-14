const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const filePath = 'smile.jpeg';
    fs.readFile(filePath, (err, data) => {
        if(err){
            res.statusCode = 500;
            res.end("Internal Server Error");
            return;
        }

        res.setHeader('Content-Type', 'image/jpeg');
        res.setHeader('Content-Length', data.length);
        res.setHeader('Cache-Control', 'public, max-age=86400');

        res.statusCode = 200;
        res.end(data);

    });
});

const port = 3000;
const hostname = "localhost";

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
});