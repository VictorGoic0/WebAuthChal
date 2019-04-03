const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../data/helpers/user-model.js");

router.get("/", async (req, res) => {
  const { username, password } = req.headers;
  if (!username || !password) {
    res.status(401).json({ message: "Please enter valid credentials." });
  } else {
    try {
      const user = await db.findByUser(username);
      if (user && bcrypt.compareSync(password, user.password)) {
        const users = await db.find();
        res.status(201).json(users);
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    } catch (error) {
      res.status(500).json({ message: `Login failed ${error}.` });
    }
  }
});

module.exports = router;
