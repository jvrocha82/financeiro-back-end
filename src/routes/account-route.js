const express = require('express');
const router = express.Router();

const accountController = require('../controllers/account-controller')
router.post('/',accountController.create)
router.get('/',accountController.list)
module.exports = router;