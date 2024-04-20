require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("Suraj5260")
})

app.get('/login', (req, res) => {
    res.send('<h1>Pls login on our website</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>chai aur code</h2>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})