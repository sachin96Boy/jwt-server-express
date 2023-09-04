import express from "express";

const authMiddleware = (req, res, next) => {
  // get auth header value
  // Authorizartion header value
  const bearerHeader = req.headers["authorization"];
//   console.log(bearerHeader);

  // token is formatted as
  // Authorization: Bearer <Access_token>

  // check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // split at the barer
    const bearer = bearerHeader.split(" ")[1];
    req.token = bearer;
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
};

export default authMiddleware;
