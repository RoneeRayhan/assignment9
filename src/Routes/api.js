// Routes/api.js
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.get('/user/create', userController.create);
router.get('/user/read', userController.read);
router.get('/user/delete', userController.delete);
router.get('/user/update', userController.update);

// Define routes for other controllers here

module.exports = router;
