const accountModel = require('../models/account-model');
const bankAccountModel = require('../models/bank-account-model');
const { updateAccount, createAccount, list, find,deleteAccount } = require('../business/account-business')
class accountController {

    async create(req, res) {
        const currentAccount = req.body;

        await createAccount(currentAccount)
            .then(() => res.status(200).json('conta criada com sucesso'))
            .catch(() => res.status(500).json('error'))
    }


    async list(req, res) {
        await list()
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error))
    }

    async find(req, res) {
        const accountId = req.params.id;
        await find(accountId)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error))
    }
    async update(req, res) {
        const currentAccount = req.body;
        const currentAccountId = req.params.id;

        await updateAccount(currentAccount, currentAccountId)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error))
    }
    async delete(req, res) {
        const accountId = req.params.id;
        await deleteAccount(accountId)
            .then(() => res.status(200).json("conta deletada com sucesso"))
            .catch(error => res.status(500).json(error))
    }



}
module.exports = new accountController();


