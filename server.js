import express from "express";
import jwt from "jsonwebtoken";
import authMiddleware from "./middleware/authMiddleware.js";

const app = express();

app.get("/api", function (req, res) {
  //   res.send('Hello World')
  res.json({
    message: "welcome to API",
  });
});

// this is a protected route
// crete a middleware to access it

app.post("/api/post", authMiddleware, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "post created",
        authData,
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  // create a mock user
  const user = {
    id: 1,
    userName: "sachin",
    email: "sac@gmail.com",
  };
  jwt.sign({ user: user }, "secretkey", { expiresIn: "1d" }, (err, token) => {
    res.json({
      token,
    });
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
