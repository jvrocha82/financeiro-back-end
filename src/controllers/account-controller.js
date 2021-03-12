const accountModel = require('../models/account-model');
class accountController {

    async create(req, res) {
        const account = new accountModel(req.body);
        await account
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async list(req, res) {
        await accountModel.find()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

}
module.exports = new accountController();


