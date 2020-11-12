const express = require('express')
const path = require('path')
const hbs = require('hbs')

const postRouter = require('./routers/post')
const commentRouter = require('./routers/comment')
const viewsRouter = require('./routers/views')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(postRouter)
app.use(commentRouter)
app.use(viewsRouter)

app.listen(port, () => {
    console.log('Server is up on port: ' + port)
})