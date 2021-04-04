const { findById, update, add, list, find, deleteAccount } = require('../.repository/account-repository');
const bankAccountBusiness = require('./bank-account-business');

exports.createAccount = async (currentAccount) => {


    await bankAccountBusiness.sumEndSubtractToBalance(currentAccount)

    return await add(currentAccount);
}
exports.updateAccount = async (currentAccount, id) => {
    const oldAccount = await findById(id);

    if (currentAccount.value != oldAccount.value)
        await bankAccountBusiness.updateBalance(currentAccount, oldAccount);


    return await update(currentAccount, id);

}

exports.list = async () => {
    return await list();

}
exports.find = async (id) => {
    return await find(id)
}
exports.deleteAccount = async (id) => {
    const currentAccount = await find(id);
    await bankAccountBusiness.subtractingDeletedBalance(currentAccount)
    return deleteAccount(id)



}


/*exports.updateBalance2 = async ({ bankAccount, oldAccount, currentAccount }) => {
    if(currentAccount.value == oldAccount.value) return bankAccount.balance;
    return currentAccount.type === 'entrada' ? (bankAccount.balance - oldAccount.value) + newAccount.value : (bankAccount.balance + oldAccount.value) + newAccount.value;
}*/


