const router = require("express").Router();
const passport = require("passport");
require("../passport/passportConfig")(passport);

router.get("/", (req, res) => {
  res.send(req.user);
});

module.exports = router;
