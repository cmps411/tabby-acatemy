const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    courseDesc: String,
    courseImg: String,
  }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;