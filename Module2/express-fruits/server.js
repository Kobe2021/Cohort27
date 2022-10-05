const express = require('express')
const morgan = require('morgan')
const fruits = require('./models/fruits')
const vegetables = require('./models/vegetables')

const app = express()
const PORT = 3000

// Middleware
app.use(morgan('dev'))
// we need this middleware to read the data from post requests
app.use(express.urlencoded({extended:false}))
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
    res.render('fruits/Index', {fruits: fruits})
});

app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect('/fruits')
})

// Render a form
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})

// Show Route: Show a single fruit
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    const {indexOfFruitsArray} = req.params
    // res.send(fruits[indexOfFruitsArray])
    res.render('fruits/Show', {
        fruit: fruits[indexOfFruitsArray],
        date: new Date().getFullYear()
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