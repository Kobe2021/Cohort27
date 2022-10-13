const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()

//GET All Blogs
router.get('/', async (req, res) => {
    try{
        const blogs = await BlogModel.find({})
        res.render('Blogs/index', {blogs: blogs})
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})
//CREATE a New Blog
router.post('/', async (req, res) => {
    try{
        if(req.body.sponsored === "on") {
            req.body.sponsored = true;
        } else {
            req.body.sponsored = false;
        }
        const newBlog = await BlogModel.create(req.body)
        res.redirect('/blog')
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})
//CREATE a New Blog
router.get('/new', async (req, res) => {
    try{
        res.render('Blogs/New')
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})
// GET Blog by ID
router.get('/:id', async (req, res) => {
    try{
        const blog = await BlogModel.findById(req.params.id)
        res.render('Blogs/Show', {blog: blog})
    }catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})
// PUT: Update by ID
router.put('/:id', async (req, res) => {
    try{
        const { id } = req.params
        const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id)
        res.redirect('/blog')
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot put')
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    try{
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
        console.log(deletedBlog);
        res.redirect('/blog')
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