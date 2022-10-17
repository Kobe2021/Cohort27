const express = require('express')
const UserModel = require('../models/UserSchema')
const bcrypt = require('bcryptjs')

const router = express.Router()

//GET All Users
router.get('/', async (req, res) => {
    try{
        const users = await UserModel.find({})
        res.send(users)
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot GET')
    }
});

// Render a signup form
router.get('/signup', (req, res) => {
    res.render('Users/SignUp')
})

router.post('/signup', async (req, res) => {
    try{
        // check if user exists
        const userAlreadyExist = await UserModel.find({email: req.body.email})
        if(userAlreadyExist[0]){
            return res.send('User already exists!')
        }
        // Create a new user
        const SALT = await bcrypt.genSalt(10) //how secure hash will be
        // re-assign password to hashed password
        req.body.password = await bcrypt.hash(req.body.password, SALT)
        const user = await UserModel.create(req.body);
        // res.send(user);
        res.redirect('/user/signin')
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot POST')
    }
});

//Render the signin form
router.get('/signin', (req, res) => {
    res.render('Users/SignIn')
})

//Signin as User
router.post('/signin', async (req, res) => {
    try{
        //find user by email
        const user = await UserModel.findOne({email: req.body.email})
        if(!user) return res.send('Please check your email and password!')
        //check if passwords match
        const decodedPassword = await bcrypt.compare(req.body.password, user.password)
        if(!decodedPassword) return res.send('Please check your email and password!')
        //set the user session
        //create new username in the session obj using the user info from db
        req.session.username = user.username
        req.session.loggedIn = true
        //redirect to /blogs
        res.redirect('/blog')
    }catch(error){

    }
})

// signout User and destroy session
router.get('/signout', (req, res) => {
    try{
        req.session.destroy()
        res.redirect('/')
    }catch(error){
        console.log(error);
    }
})

// Find user by ID
router.get('/:id', async (req, res) => {
    try{
        const user = await UserModel.findById(req.params.id)
        res.send(user)
    }catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})

// PUT: Update by ID
router.put('/:id', async (req, res) => {
    try{
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument': "after"})
        res.send(updatedUser)

    } catch(error){
        console.log(error);
        res.status(403).send('Cannot PUT')
    }
})
//DELETE
router.delete('/:id', async (req, res) => {
    try{
        const deletedUser = await UserModel.findByIdAndRemove(req.params.id)
        console.log(deletedUser);
        res.send('User Deleted')
    }catch(error){
        console.log(error);
        res.status(403).send('Cannot DELETE')
    }
    
})

// router.post('/', (req, res) => {
//     //Create a new blog
//     BlogModel.create(req.body)
//     .then(data => {
//         console.log(data);
//         res.send(data)
//     })
//     .catch(error => {
//         console.log(error);
//         res.status(403).send('Cannot create')
//     })
// })



module.exports = router;