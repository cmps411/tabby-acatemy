const express = require('express')
const router = express.Router();
const User = require("../models/user.model");

router.use(express.json());
router.use(express.urlencoded({extended: true}))

router.put('/', (req, res, next) => {
        const id = req.user.id
        const query = {$set:{image: req.body.image}}
        User.findByIdAndUpdate(id, query, {new: true, useFindAndModify: false})
        .then(res.status(200).send())
});

module.exports = router