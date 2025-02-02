const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000, () => {
  console.log("serveur démarré sur localhost:3000");
});
