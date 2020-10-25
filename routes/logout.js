const router = require("express").Router();


router.get('/', (req, res) => {
  req.session.destroy(function (err) {
    res.clearCookie('connect.sid');
    res.redirect('/');
  });

  })

module.exports = router