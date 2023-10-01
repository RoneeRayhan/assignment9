// api.js
const express = require('express');
const router = express.Router();

const userController = require('../Controllers/userController');
const adminController = require('../Controllers/adminController');
const subAdminController = require('../Controllers/subAdminController');
const postController = require('../Controllers/postController');

// User routes
router.post('/users', userController.create);
router.get('/users/:id', userController.read);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

// Admin routes
router.post('/admins', adminController.create);
router.get('/admins/:id', adminController.read);
router.put('/admins/:id', adminController.update);
router.delete('/admins/:id', adminController.delete);

// Sub-Admin routes
router.post('/subadmins', subAdminController.create);
router.get('/subadmins/:id', subAdminController.read);
router.put('/subadmins/:id', subAdminController.update);
router.delete('/subadmins/:id', subAdminController.delete);

// Post routes
router.post('/posts', postController.create);
router.get('/posts/:id', postController.read);
router.put('/posts/:id', postController.update);
router.delete('/posts/:id', postController.delete);

module.exports = router;

