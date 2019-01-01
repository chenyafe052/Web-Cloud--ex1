const mongoose = require('mongoose');

const player = {
    PlayerNum: { type:Number, required: true},
    Nmae: { type: String, required: true}
}

const player_schema = new mongoose.Schema(player);
module.exports = player;