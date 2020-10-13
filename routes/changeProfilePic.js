const router = require("express").Router();
const passport = require("passport");
require("../passport/passportConfig")(passport);
const User = require("../models/user.model");

router.put('/', async (req, res, next) => {
    try{
        const id = req.user.id
        const update = req.image
        User.findByIdAndUpdate(id,
            {
                $set: {image: update}
            },
            {
                new: true
            })
    } catch(error) {

    }
(req, res, next);
});

module.exports = router