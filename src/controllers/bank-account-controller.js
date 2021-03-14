const { response } = require('express');
const bankAccountModel = require('../models/bank-account-model');
class bankAccountController {

    async create(req, res) {
        const bankAccount = new bankAccountModel(req.body);
        await bankAccount
            .save()
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error))
    }

    async list(req, res) {
        await bankAccountModel.find()
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error))
    }

    async find(req, res) {
        await bankAccountModel.findById(req.params.id)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error))
    }

    async delete(req, res) {
        await bankAccountModel.deleteOne({ '_id': req.params.id })
            .then(() => res.status(200).json('Conta bancária deletada'))
            .catch(error => res.status(500).json(error))
    }
    async update(req, res) {
        await bankAccountModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error))
    }
}
module.exports = new bankAccountController();