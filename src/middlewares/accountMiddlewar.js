const bankAccountModel = require('../models/bank-account-model');

const accountMiddlewar = async (req, res, next) => {
    const { value, source, type, bankAccountId, when } = req.body

    if (!value)
        return res.status(400).json({ error: 'Valor é um campo obrigatório' })

    else if (!source)
        return res.status(400).json({ error: 'Origem é um campo obrigatório' })

    else if (!type)
        return res.status(400).json({ error: 'Tipo é um campo obrigatório' })

    else if (!when)
        return res.status(400).json({ error: 'Quando é um campo obrigatório' })

    else if (!bankAccountId) {
        return res.status(400).json({ error: 'Banco de origem é um campo obrigatiório' })

    } else {
        let exists = await bankAccountModel.findById(bankAccountId).catch()
        if (exists == null)
            res.status(400).json({ error: 'Banco de origem inválido' })

        else
            next();
    }
}


module.exports = accountMiddlewar;