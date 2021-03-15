const accountModel = require('../models/account-model');
const bankAccountModel = require('../models/bank-account-model');
class accountController {

    async create(req, res) {

        const dataBanckAccount = await bankAccountModel.findByIdAndUpdate(req.body.bankAccount).catch()

        const newBalance = req.body.type === 'entrada' ? dataBanckAccount.balance + req.body.value : dataBanckAccount.balance - req.body.value;
        await bankAccountModel.findByIdAndUpdate({ '_id': req.body.bankAccount },
            { 'balance': newBalance }, { new: true })

        console.log(newBalance)

        const dataAccount = {
            ...req.body,
            bankAccount: {
                _id: dataBanckAccount._id,
                name: dataBanckAccount.name,
                number: dataBanckAccount.number,
                type: dataBanckAccount.type
            }
        }
        const account = new accountModel(dataAccount);
        await account
            .save()
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error))
    }


    async list(req, res) {
        await accountModel.find()
            .sort()
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error))
    }

    async find(req, res) {
        await accountModel.findById(req.params.id)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error))
    }

    async delete(req, res) {
        await accountModel.deleteOne({ '_id': req.params.id })
            .then(() => res.status(200).json("conta deletada com sucesso"))
            .catch(error => res.status(500).json(error))
    }

    async update(req, res) {
        await accountModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error))
    }

}
module.exports = new accountController();


