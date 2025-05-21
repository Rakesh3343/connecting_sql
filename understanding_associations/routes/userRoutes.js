const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/users", userController.createUserWithPosts);
router.get("/users/:id", userController.getUserWithPosts);

module.exports = router;
