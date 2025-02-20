const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// ✅ Définir EJS comme moteur de vue
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ✅ Importer les routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// ✅ Middleware pour parser les données des formulaires
app.use(bodyParser.urlencoded({ extended: false }));

// ✅ Servir les fichiers statiques (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Routes
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

// ✅ Gestion des erreurs (404)
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' });
});

// ✅ Démarrer le serveur
app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
