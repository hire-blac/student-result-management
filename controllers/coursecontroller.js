const Course = require("../models/course");

module.exports.courses_get = async (req, res) => {
  // get all courses from database
  const courses = await Course.find();

  res.render('courses/courses', {courses});
}

module.exports.single_course_get = async (req, res) => {
  // get single course
  const id = req.params.id;

  const course = await Course.findById(id);

  res.render('courses/singlecourse', {course});
}

module.exports.add_new_course_get = (req, res) => {
  res.render('courses/addcourse');
}

module.exports.add_new_course_post = async (req, res) => {
  // add new course
  const {course_code, course_title, course_unit} = req.body;

  const course = await Course.create({
    course_code,
    course_title,
    course_unit
  });

  res.json(course);
}