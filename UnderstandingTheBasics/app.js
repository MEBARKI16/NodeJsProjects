const http = require('http');

// Créer un serveur HTTP
http.createServer((req, res) => {
    console.log("hello"); // Affiche "hello" dans la console à chaque requête
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Définir le statut et le type de contenu
    res.end('Hello, world!'); // Envoyer une réponse au client
}).listen(3000, () => {
    console.log('Serveur démarré sur le port 3000'); // Indiquer que le serveur est prêt
});
