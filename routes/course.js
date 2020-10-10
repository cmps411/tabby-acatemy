var router = require("express").Router();
var Course = require('../models/course.model');

router.get("/", async(req, res) => {
    try{
      const courses = await Course.find();
      
      res.json({
        courses:courses
      });
      
    } catch (error) {
        console.log(error);
      }
  });
  
module.exports = router;