const express = require('express');
const router = express.Router();
const briefController = require('../controllers/briefController');

router.post('/', briefController.createBrief);

module.exports = router;
