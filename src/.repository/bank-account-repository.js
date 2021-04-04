const bankAccountModel = require('../models/bank-account-model');

exports.create = async (bankAccount) => {
   const currentBankAccount = new bankAccountModel(bankAccount);
   return await currentBankAccount.save()

}
exports.findById = async (id) => {

   return await bankAccountModel.findById(id)
}
exports.updateBalance = async (newBalance, id) => {
   return await bankAccountModel.findByIdAndUpdate({ '_id': id }, { 'balance': newBalance }, { new: true })
}
exports.update = async (bankAccount, id) => {
   return await bankAccountModel.findByIdAndUpdate({ '_id': id }, bankAccount, { new: true })
}
exports.deleteBankAccount = async(id) =>{
   return await bankAccountModel.deleteOne({'_id': id})
}
exports.list = async() => {
   return await bankAccountModel.find()
} 


