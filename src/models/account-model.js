const mongoose = require('../config/database');
const schema = mongoose.Schema;

const accountSchema = new schema({
    value: { type: Number, required: true },
    source: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    pay: { type: Boolean, required: true, default: false },
    when: { type: Date, required: true},
    creationDate: { type: Date, required: true , default: Date.now()},
  
})
module.exports = mongoose.model('account', accountSchema);