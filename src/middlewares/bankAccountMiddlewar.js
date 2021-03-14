const bankAccountMiddlewar = async (req, res, next) => {
    const { name, number, type, balance } = req.body

    if (!name)
        return res.status(400).json({ error: 'Nome é um campo obrigatório' })

    else if (!number)
        return res.status(400).json({ error: 'Numero é um campo obrigatório' })

    else if (!type)
        return res.status(400).json({ error: 'Tipo é um campo obrigatório' })

    else if (!balance)
        return res.status(400).json({ error: 'Saldo é um campo obrigatório' })

    else
        next();
}


module.exports = bankAccountMiddlewar;