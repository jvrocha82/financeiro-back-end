const mongoose = require('mongoose');
const url = 'mongodb+srv://joaovitor:sofia@cluster0.tbfur.mongodb.net/financial_control?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;