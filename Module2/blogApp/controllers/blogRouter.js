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
//CREATE a New Blog
router.post('/', async (req, res) => {
    try{
        const newBlog = await BlogModel.create(req.body)
        res.send(newBlog)
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})
// PUT: Update by ID
router.put('/:id', async (req, res) => {
    try{
        const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument': "after"})
        res.send(updatedBlog)

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
        res.send('Blog Deleted')
    }catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
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