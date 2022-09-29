const express = require('express')

const app = express()
const PORT = 3000

app.get('/greeting', (req, res) => {
    console.log(req)
    res.send('Hello, stranger')
})

app.get('/greeting/:name', (req, res) => {
    const {name} = req.params;
    res.send(`Hello, ${name}!`);
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})