const express = require('express');
const { getAllFood,createfood } = require('../controllers/foodController');

const router = express.Router();

router.post('/', createfood);
router.get('/', getAllFood);

module.exports = router;