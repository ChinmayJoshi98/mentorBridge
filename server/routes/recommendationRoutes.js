const express = require('express');
const { getRecommendations } = require('../controllers/recommendationController');
const router = express.Router();

router.get('/:mentee_id', getRecommendations);

module.exports = router;
