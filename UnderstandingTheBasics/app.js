const http = require('http');

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
    let parseBody = null;
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (x) => {
            console.log(x);
            body.push(x);
        });
        req.on('end', () => {
             parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head>
                <title>My First Page</title>
            </head>
            <body>
                <h1>Hello ${parseBody} from my Node js Server</h1>
            </body>
        </html>
    `);
    res.end();
}).listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
