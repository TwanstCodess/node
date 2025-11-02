// routes/mainRoutes.js
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// پەیجی سەرەکی
router.get('/', mainController.home);

// پەیجی زانیاری
router.get('/about', mainController.about);

// پەیجی JSON
router.get('/api', mainController.api);

module.exports = router;
