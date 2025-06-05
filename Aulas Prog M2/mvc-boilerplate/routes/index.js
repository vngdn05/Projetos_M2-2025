const express = require('express');
const router = express.Router();
const blankController = require('../controllers/blankController');

/* GET home page. */
router.get('/blank', blankController.show);
router.get('/', blankController.show);

module.exports = router;