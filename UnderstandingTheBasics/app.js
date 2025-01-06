const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
        <head>
        <title>Mon Serveur Node JS</title>
        </head>
        <body> 
         <p style="color:red">hello world</p>
        </body>
      </html>`)
    res.end();
}).listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
