const express = require('express');

const router  = express.Router();

const studentController = require('../controllers/student');

router.get('/studentData',studentController.student);

module.exports = router;