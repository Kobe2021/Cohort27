const express = require('express')
const pokemon = require('./models/pokemon')
// const vegetables = require('./models/vegetables')
// require('dotenv').config()
// console.log(process.env.MONGO_URI);
// const mongoose = require('mongoose');
// const methodOverride = require('method-override')
// const Pokemon = require('./models/pokeModel')
// const { request } = require('express')

const app = express()
const PORT = 3000


// App settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Routes
app.get('/', (req, res) => {
    res.send('Welcome!')
});

// pokemon route
app.get('/pokemon', (req, res) => {
    res.render('pokemon/index', {pokemon:pokemon})
})
// Render a form
app.get('/pokemon/new', (req, res) => {
    res.render('pokemon/New', {pokemon:pokemon})
})

app.get('/pokemon/:id', (req, res) => {
    const {id} = req.params
    res.render('pokemon/Show', {pokemon:pokemon[id]})
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', ()=> {
//     console.log('connected to mongo');
// });