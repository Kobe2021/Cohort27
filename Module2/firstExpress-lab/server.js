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

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const {total, tipPercentage} = req.params;
    let tip = (tipPercentage / 100) * total
    res.send(`Tip: ${tip}`)
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})