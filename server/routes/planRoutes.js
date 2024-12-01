const express = require('express');
const { getPlans } = require('../controllers/planController');
const router = express.Router();

router.get('/:mentee_id', getPlans);

module.exports = router;
