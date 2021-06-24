const mongoose = require('mongoose');
const url = "mongodb+srv://joaovitor:debiny@cluster0.tbfur.mongodb.net/financial_control?retryWrites=true&w=majority"//process.env.MONGODB_LOCAL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;