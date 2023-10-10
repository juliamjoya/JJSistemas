const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Respuesta al GET');
  });

module.exports = router;