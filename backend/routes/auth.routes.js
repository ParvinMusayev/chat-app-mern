import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Login route");
});
router.get("/register", (req, res) => {
  res.send("Register route");
});

export default router;