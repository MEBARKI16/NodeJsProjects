const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});
app.listen(3000, () => {
  console.log("serveur démarré sur localhost:3000");
});
