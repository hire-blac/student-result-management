const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  course_code: {
    type: String
  },
  course_title: {
    type: String
  },
  course_unit: {
    type: Number
  },
}, {timestamps: true})

const Course = mongoose.model('course', courseSchema);

module.exports = Course;