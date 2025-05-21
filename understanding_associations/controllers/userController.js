const db = require("../models");
const User = db.User;
const Post = db.Post;

// Create a user with posts
exports.createUserWithPosts = async (req, res) => {
  try {
    const { name, email, posts } = req.body;

    const user = await User.create(
      {
        name,
        email,
        Posts: posts, // array of { title, content }
      },
      {
        include: [Post],
      }
    );

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a user with their posts
exports.getUserWithPosts = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [Post],
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
