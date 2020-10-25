const router = require("express").Router();
const passport = require("passport");
require("../passport/passportConfig")(passport);

router.get('/', (req, res) => {
    req.logout()
    req.session.destroy();
  })

module.exports = router