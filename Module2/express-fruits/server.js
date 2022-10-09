const express = require('express')
const morgan = require('morgan')
const fruits = require('./models/fruits')
const vegetables = require('./models/vegetables')
require('dotenv').config()
console.log(process.env.MONGO_URI);
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Fruit = require('./models/FruitModel')
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

// Index Route: Get all fruits
app.get('/fruits', (req, res) => {
    // res.send(fruits)
    Fruit.find({}, (error, fruitsFromDB) => {
        if(error){
            console.log(error);
        }
        res.render('fruits/Index', { fruits: fruitsFromDB });
    })
});

// CRUD - Create, Read, Update, Delete
// CREATE - post
app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    // Using the model to create a new resource on the database
    Fruit.create(req.body, (error, createdFruit) => {
        if(error){
            console.log(error);
        }
        console.log(createdFruit)
        res.redirect('/fruits') // Redirect the user to fruits
    })
})

// Render a form
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})

// READ - get
// Show Route: Show a single fruit
app.get('/fruits/:id', (req, res) => {
    const { id } = req.params
    // res.send(fruits[indexOfFruitsArray])

    Fruit.findById(id, (error, foundFruit) => {
        if(error){
            console.log(error);
        }
        res.render('fruits/Show', {
            fruit: foundFruit,
            date: new Date().getFullYear(),
        });
    })
})

// DELETE - delete
app.delete('/fruits/:id', (req, res) => {
    const {id} = req.params;

    //Delete fruit from db
    Fruit.findByIdAndRemove(id, (error, data) => {
        console.log('Hereeee', data);
        if(error){
            console.log(error)
            res.status(403).send('Bad request')
        }
        res.redirect('/fruits')
    })
})

app.get('/fruits/:id/edit', (req, res) => {
    const {id} = req.params
    // find fruit in the database using the id
    Fruit.findById(id, (error, foundFruit) => {
        if(error){
            console.log(error);
            res.status(403).send('Id not found')
        }
        //render the view and pass the data from the fruit
        res.render('fruits/Edit', {fruit: foundFruit})
    })

})

// UPDATE - put
app.put('/fruits/:id', (req, res) => {
    const {id} = req.params
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.findByIdAndUpdate(id, req.body, (error, updatedFruit) => {
        if(error){
            console.log(error);
            res.status(403).send('Cannot Update')
        }
        res.redirect(`/fruits/${id}`)
    })
})

//Vegetables Route with an index of veggies
app.get('/vegetables', (req, res) => {
    res.render('vegetables/IndexVeggies', {vegetables: vegetables})
})

app.post('/vegetables', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    vegetables.push(req.body)
    res.redirect('/vegetables')
})
// Render a form
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})
//Show route: show a single vegetable
app.get('/vegetables/:indexOfVeggies', (req, res) => {
    const {indexOfVeggies} = req.params
    res.render('vegetables/Show', {
        vegetable: vegetables[indexOfVeggies],
        date: new Date().getFullYear()
    })
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});