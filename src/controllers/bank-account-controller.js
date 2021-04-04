const bankAccountModel = require('../models/bank-account-model');
const {createBankAccount,updateBankAccount,deleteBankAccount,findBankAccount,listBankAccount } = require('../business/bank-account-business')
class bankAccountController {

    async create(req, res) {
        const currenctBankAccount = req.body;
        await createBankAccount(currenctBankAccount)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error))
    }

    async list(req, res) {
        await listBankAccount()
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error))
    }

    async find(req, res) {
        const bankAccountId = req.params.id;
        await findBankAccount(bankAccountId)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error))
    }

    async delete(req, res) {
    const bankAccountId = req.params.id;
      await deleteBankAccount(bankAccountId)
      
            .then(() => res.status(200).json('Conta bancária deletada'))
            .catch(error => res.status(500).json(error))
    }
    async update(req, res) {
        const currentBankAccount = req.body;
        const bankAccountId = req.params.id;
        await updateBankAccount(currentBankAccount,bankAccountId)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error))
    }
}
module.exports = new bankAccountController();