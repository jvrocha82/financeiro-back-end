const express = require('express');
const router = express.Router();

const accountController = require('../controllers/account-controller')
const bankAccountController = require('../controllers/bank-account-controller')

// account 
router.post('/account',accountController.create)
router.get('/account',accountController.list)
router.get('/account/:id',accountController.find)
router.delete('/account/:id',accountController.delete)
router.put('/account/:id',accountController.update)

// Bank account
router.post('/bankAccount',bankAccountController.create)
router.get('/bankAccount',bankAccountController.list)
router.get('/bankAccount/:id',bankAccountController.find)
router.delete('/bankAccount/:id',bankAccountController.delete)
router.put('/bankAccount/:id',bankAccountController.update)

module.exports = router;