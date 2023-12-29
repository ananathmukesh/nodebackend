const express = require('express');
const router = express.Router();
const { signup,signin,otpverify,logout } = require('../controllers/authController');

router.post('/signup',signup);
router.post('/otpverify',otpverify);
router.post('/signin',signin);
router.get('/logout',logout);

module.exports = router;