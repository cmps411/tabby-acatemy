const router = require("express").Router();
const passport = require("passport");
require("../passport/passportConfig")(passport);

router.get('/', (req, res) => {
    req.session.destroy(function(err) {
      console.log(err)
    })
    req.session = null
  })

module.exports = router