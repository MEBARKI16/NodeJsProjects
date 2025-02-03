const express = require("express");
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.get("/add-product", (req, res) => {
  res.send(`
      <form action="/admin/product" method="POST">
      <label for="name">name</label>
      <input type="text" name="name" id="name" />
      <button type="submit">ok</button>
      </form>
      `);
});

router.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;