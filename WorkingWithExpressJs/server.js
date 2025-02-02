const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send(`
      <form action="/afficheName" method="POST">
      <label for="name">name</label>
      <input type="text" name="name" id="name" />
      <button type="submit">ok</button>
      </form>
      `);
});

app.post("/afficheName", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("serveur démarré sur localhost:3000");
});
