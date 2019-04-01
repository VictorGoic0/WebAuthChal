const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../data/helpers/user-model.js");

router.get("/", async (req, res) => {
  try {
    const users = await db.find();
    if (users) {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json({ message: `Users could not be found ${error}.` });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res
        .status(404)
        .json({ message: "User with specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json({ message: `User request failed ${error}.` });
  }
});

router.post("/", async (req, res) => {
  const user = req.body;
  try {
    const newUser = await db.create(user);
    if (newUser) {
      res.status(201).json(newUser);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Your user could not be usered ${error}.` });
  }
});

module.exports = router;
