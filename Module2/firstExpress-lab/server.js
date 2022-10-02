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

const phrasesArr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
app.get('/magic/:phrase', (req, res) => {
    const {phrase} = req.params;
    let magResponse = phrasesArr[Math.floor(Math.random() * 20)];
    res.send(`Question: ${phrase} <h1>Magic 8 Ball Response: ${magResponse}</h1>`)
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})