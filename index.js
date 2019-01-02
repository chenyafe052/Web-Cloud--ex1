const express = require('express')
const morgan = require('morgan')
const controller = require('./controller')
const asyncWrapper = require('./async.wrapper')

const app = express()
const port = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))


app.all('*', (req, res, next) => {
    res.send("Game cancellations by Chen Yafe")
    next()
})

app.get('/games', asyncWrapper(controller.getAllCanceldGame))
app.post('/game/:id', asyncWrapper(controller.setGameStatus))
app.get('/game/:status&:cancellationReason', asyncWrapper(controller.getCancellationGameByReason))

app.listen(port, () => console.log(`Express server listening on port ${port}`))