const express = require('express');
const router = express.Router();
const { 
    signup,
    signin,
    otpverify,
    logout,
    Profileimage,
    getusers,
    getMessages
 } = require('../controllers/authController');
const path = require('path');
const multer = require('multer');

  // Set up the storage engine using Multer
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets/Profileimage'); // Specify the directory where images will be stored
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });

const upload = multer({ storage: storage });


router.post('/uploadimg', upload.single('image'), Profileimage);
router.post('/signup',signup);
router.post('/otpverify',otpverify);
router.post('/signin',signin);
router.get('/logout',logout);
router.post('/chatlist',getusers);
router.post('/messages',getMessages);

module.exports = router;