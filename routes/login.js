const router = require("express").Router();
const passport = require("passport");
require("../passport/passportConfig")(passport);

router.post('/', (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No user exists!");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.redirect("/");
      });
    }
  })(req, res, next);
});

module.exports = router