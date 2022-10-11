const express = require('express')
const morgan = require('morgan')
const pokemon = require('./models/pokemon')
// const vegetables = require('./models/vegetables')
require('dotenv').config()
console.log(process.env.MONGO_URI);
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Pokemon = require('./models/pokeModel')
// const { request } = require('express')

const app = express()
const PORT = 3000

// Middleware
app.use(morgan('dev'))
// we need this middleware to read the data from post requests
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
// Create your own middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next()
})

// App settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Routes
app.get('/', (req, res) => {
    res.send('Welcome!')
});

// pokemon route
app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (error, pokemonFromDB) => {
        if(error){
            console.log(error);
        }
        res.render('pokemon/Index', { pokemon: pokemonFromDB });
    })
})

// CRUD - Create, Read, Update, Delete
// CREATE - post
app.post('/pokemon', (req, res) => {
    // Using the model to create a new resource on the database
    Pokemon.create(req.body, (error, createdPokemon) => {
        if(error){
            console.log(error);
        }
        console.log(createdPokemon)
        res.redirect('/pokemon') // Redirect the user to fruits
    })
})

// Render a form
app.get('/pokemon/new', (req, res) => {
    res.render('pokemon/New')
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});