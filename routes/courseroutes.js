const {Router} = require('express');
const courseController = require('../controllers/coursecontroller')

// create router object
const router = Router()

// routes
router.get('/courses', courseController.courses_get);

router.get('/courses/new', courseController.add_new_course_get);
router.post('/courses/new', courseController.add_new_course_post);

router.get('/courses/:id', courseController.single_course_get);

module.exports = router;