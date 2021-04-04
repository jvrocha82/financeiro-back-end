const accountModel = require('../models/account-model');
exports.add = async (currentAccount) => {
    const newAccount = new accountModel(currentAccount);
    return await newAccount.save()
}

exports.list = async () => {
    return await accountModel.find().sort()
}
exports.findById = async (id) => {
    return await accountModel.findById(id)
}
exports.find = async (id) => {
    return await accountModel.findById(id)
}
exports.update = async (currentAccount, id) => {
    return await accountModel.findByIdAndUpdate({ '_id': id }, currentAccount, { new: true });
}
exports.deleteAccount = async (id) => {
    return await accountModel.deleteOne( {'_id': id})
}

