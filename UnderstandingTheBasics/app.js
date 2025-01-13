const http = require('http');

http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write(`
        <html>
            <head>
                <title>Enter Message</title>
            </head>
            <body>
                <form action="/message" method="POST">
                    <input type="text" name="message" />
                    <button type="submit">soummetre</button>
                </form>
            </body>
        </html>
        `);
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head>
                <title>My First Page</title>
            </head>
            <body>
                <h1>Hello from my Node js Server!</h1>
            </body>
        </html>
    `);
    res.end();
}).listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
