const express = require('express')
const UserModel = require('../models/UserSchema')

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

router.post('/', async (req, res) => {
    try{
        // check if user exists
        const userAlreadyExist = await UserModel.find({email: req.body.email})
        if(userAlreadyExist[0]){
            return res.send('User already exists!')
        }
        // Create a new user
        const user = await UserModel.create(req.body);
        res.send(user);
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot POST')
    }
});
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