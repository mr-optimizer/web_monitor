const express = require("express");
const router = express.Router();

router.route("/test").get(async(req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.cookie("token", "test-token", options);
  res.status(200).json({
    success: true,
    newSubject,
    message: "Welcome to the API, this is test route, Server running successfully !!",
  });
});
module.exports = router;
