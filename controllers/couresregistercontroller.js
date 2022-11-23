const Course = require("../models/course");
const Student = require("../models/student");
const StudentCourseEnrollment = require("../models/studentcourseenrollment");

module.exports.register_course_get = async (req, res) => {
  const courses = await Course.find();

  res.render('enrollment/enroll', {courses});
}

module.exports.register_course_post = async (req, res) => {
  console.log(req.body);
}
