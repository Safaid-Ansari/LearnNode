const express = require('express');

const  router = express.Router();

const  empController = require('../controllers/Employers');

router.get('/empData',empController.emp);

module.exports = router;