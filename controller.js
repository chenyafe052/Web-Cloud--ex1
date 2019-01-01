const connection = require('./db')
const Game = require('./game')
const player = require('./player')

module.exports = {
    async getAllCanceldGame(req, res, next) {
        const result = await Game.find({})
        
        if (result) res.json(result)
        else res.status(404).send('not found')
    },

    async setGameStatus(req, res, next) {
        const { id = null } = req.params
        const { status = null } = req.body
        const result = await Game.updateOne({id},{status})
                    
        if (result) res.json(result)
        else res.status(404).send('not found')
    },

    async getCancellationGameByReason(req, res, next) {
        const {status = null, cancellationReason = null} = req.params;
        const result = await Game.find({status, cancellationReason})

        if (result) res.json(result)
        else res.status(404).send('not found')
    }
}