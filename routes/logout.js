const router = require("express").Router();
const passport = require("passport");
require("../passport/passportConfig")(passport);

router.get('/', (req, res) => {
  try {
    req.logout()
    req.session.destroy(function(err) {
      res.send(err)
    });
  } catch(err) {
    res.send("logout failed")
  }
  })

module.exports = router