
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT =  5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose
  .connect('mongodb://localhost:27017/TESTCRUDNODEJS', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

