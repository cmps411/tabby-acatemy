const router = require("express").Router();
const passport = require("passport");
require("../passport/passportConfig")(passport);

router.get('/', (req, res) => {
    req.logout()
    res.redirect('/')
  })

module.exports = router