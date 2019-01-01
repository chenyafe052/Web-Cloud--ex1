const mongoose = require('mongoose')
const player = require('./player')


const schema = {
    id:         { type: Number, required: true},
    groupName:  { type: String, required: true},
    status:     { type: String, required: true},
    cancellationReason:   { type: String, required: false},
    players:    [player]
}

const game_schema = new mongoose.Schema(schema);
module.exports = mongoose.model('Game', game_schema);