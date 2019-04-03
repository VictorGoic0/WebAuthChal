const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../data/helpers/user-model.js");

router.post("/", async (req, res) => {
  let { username, password } = req.body;
  if (!username || !password) {
    res.status(401).json({ message: "Please enter valid credentials." });
  } else {
    const hash = bcrypt.hashSync(password, 8);
    password = hash;
    try {
      const newUser = await db.create({ username, password });
      if (newUser) {
        res.status(201).json(newUser);
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: `Your user could not be created ${error}.` });
    }
  }
});

module.exports = router;
