
const bankAccountModel = require('../models/bank-account-model');
const { create, findById, updateBalance, deleteBankAccount, update, list } = require('../.repository/bank-account-repository')

//Funções internas
exports.createBankAccount = async (currentBankAccount) => {
    return await create(currentBankAccount)
}


// Funções externas
exports.updateBalance = async (currentAccount, oldAccount) => {
    const bankAccount = await bankAccountModel.findById(currentAccount.bankAccountId);
    let newBalance = currentAccount.type === 'entrada' ? (bankAccount.balance - oldAccount.value) + currentAccount.value : (bankAccount.balance + oldAccount.value) - currentAccount.value;
    await bankAccountModel.updateOne({ '_id': oldAccount.bankAccountId }, { 'balance': newBalance }, { new: true });
}

exports.sumEndSubtractToBalance = async (currentAccount) => {

    const bankAccount = await findById(currentAccount.bankAccountId);
    const newBalance = currentAccount.type === 'entrada' ? bankAccount.balance + currentAccount.value : bankAccount.balance - currentAccount.value;
    await updateBalance(newBalance, currentAccount.bankAccountId)

}
exports.subtractingDeletedBalance = async (currentAccount) => {
    const bankAccount = await findById(currentAccount.bankAccountId);
    const newBalance = currentAccount.type === 'entrada' ? bankAccount.balance - currentAccount.value : bankAccount.balance - currentAccount.value;

    await updateBalance(newBalance, currentAccount.bankAccountId)
}
exports.updateBankAccount = async (currentAccount, id) => {
    return await update(currentAccount, id)
}
exports.deleteBankAccount = async (id) => {
    return deleteBankAccount(id)
}
exports.findBankAccount = async (id) => {
    return findById(id)
}
exports.listBankAccount = async (id) => {
    return list()
}
