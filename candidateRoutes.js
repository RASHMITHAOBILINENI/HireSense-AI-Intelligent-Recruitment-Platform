const express = require('express');
const multer = require('multer');
const { uploadResume } = require('../controllers/candidateController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('resume'), uploadResume);

module.exports = router;