const {Router} = require('express');
const courseRegister = require('../controllers/couresregistercontroller')
const { requireAuth } = require('../middlewares/checkUser');

// create router object
const router = Router()

// routes
router.get('/register', requireAuth, courseRegister.register_course_get);
router.post('/register', requireAuth, courseRegister.register_course_post);

module.exports = router;