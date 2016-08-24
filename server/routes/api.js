const express = require('express');
const router = express.Router();

router.use('/people', require('./people'))
router.use('/animals', require('./animals'))
module.exports = router;
