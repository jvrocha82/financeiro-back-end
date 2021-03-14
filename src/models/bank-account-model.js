const mongoose = require('../config/database')
const schema = mongoose.Schema;

const bankAccountSchema = new schema({
    name:{type:String , required:true},
    number:{type:Number,required:true},
    description:{type:String,required:false},
    type:{type:String,require:true},
    balance:{type:Number,required:true, default:0},
    creationDate: { type: Date, required: true , default: Date.now()},
    lastChange:{type:Object, required:false,
        default:{
            value: 0,
            source: "criação" ,
            description: "Criação da conta bancária",
    }}
})
module.exports = mongoose.model('bankAccount', bankAccountSchema);