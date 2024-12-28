const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require("../middlewares/auth");
const upload = require('../middlewares/upload');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.put('/profile', authMiddleware, upload.single('avatar'), authController.updateProfile);
router.get('/profile', authMiddleware, authController.getProfile);


module.exports = router;