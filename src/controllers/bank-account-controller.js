const { response } = require('express');
const bankAccountModel = require('../models/bank-account-model');
class bankAccountController {
    
    async create(req, res) {
        const bankAccount = new bankAccountModel(req.body);
        await bankAccount
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async list(req, res) {
        await bankAccountModel.find()
            .then(response => {
                if (response)
                    return res.status(200).json(response);
                else
                    return res.status(404).json({ error: "Conta bancária nao encontrada" })
            })
            .catch(error => {
                return res.status(500).json(error)
            })

    }

    async find(req, res) {
        await bankAccountModel.findById(req.params.id)
            .then(response => {
                if (response)
                    return res.status(200).json(response);
                else
                    return res.status(404).json({ error: "Conta bancária nao encontrada" })
            })
            .catch(error => {
                return res.status(500).json(error)
            })

    }
}
module.exports = new bankAccountController();