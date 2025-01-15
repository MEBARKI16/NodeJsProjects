const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
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

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (x) => {
            console.log(x);
            body.push(x);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })

    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head>
                <title>My First Page</title>
            </head>
            <body>
                <h1>Hello from my Node js Server</h1>
            </body>
        </html>
    `);
    res.end();
}).listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
