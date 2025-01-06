const http = require('http');

// Créer un serveur HTTP
http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers); // Affiche "hello" dans la console à chaque requête
}).listen(3000, () => {
    console.log('Serveur démarré sur le port 3000'); // Indiquer que le serveur est prêt
});
