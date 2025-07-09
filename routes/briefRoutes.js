const express = require('express');
const router = express.Router();
const briefController = require('../controllers/briefController');

router.post('/', briefController.createBrief);

router.get('/', briefController.getAllBriefs);

router.get('/:id', briefController.getBriefById);

router.put('/:id', briefController.updateBriefById);

router.delete('/:id', briefController.deleteBriefById);

module.exports = router;
