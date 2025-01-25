const express = require('express');
const { getAllMenu,createMenu } = require('../controllers/menuController');

const router = express.Router();

router.post('/', createMenu);
router.get('/', getAllMenu);

module.exports = router;