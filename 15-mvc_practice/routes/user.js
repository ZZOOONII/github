const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.main);
router.post('/practice1', controller.practice1);

module.exports = router;
