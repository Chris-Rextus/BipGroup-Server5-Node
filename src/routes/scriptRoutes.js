const express = require('express');
const router = express.Router();
const { runPythonScript } = require('../controllers/scriptController');

router.post('/run', runPythonScript);

module.exports = router;
