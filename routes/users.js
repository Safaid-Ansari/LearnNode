const express = require('express');

const router = express.Router();


const userController = require('../controllers/user');

router.get('/profile',userController.profile);
module.exports = router;