const express = require('express')
const router = express.Router()

//@ route GET api/Auth
router.get('/', (req, res) => res.send('Auth route'))

module.exports = router;