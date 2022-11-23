const {Router} = require('express');
const studentController = require('../controllers/studentcontroller')

// create router object
const router = Router()

// routes
router.get('/signup', studentController.signup_get)
router.post('/signup', studentController.signup_post)

router.get('/login', studentController.login_get)
router.post('/login', studentController.login_post)

module.exports = router;