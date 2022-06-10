const express = require('express');


const router = express.Router();

const homeController = require('../controllers/home_Controller.');
console.log('router loaded ');

router.get('/',homeController.home);
router.get('/think',homeController.think);

module.exports = router;

