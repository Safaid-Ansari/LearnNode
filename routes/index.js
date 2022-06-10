const express = require('express');


const router = express.Router();

const homeController = require('../controllers/home_Controller.');
console.log('router loaded ');

router.get('/',homeController.home);
router.get('/think',homeController.think);
router.get('/user',homeController.user);
router.get('/student',homeController.student);
router.get('/emp',homeController.emp);
router.use('/user',require('./users'));
router.use('/student',require('./Students'));
router.use('/emp',require('./Employee'));

module.exports = router;

