const express = require('express');

const router = express.Router();
const Post = require('../models/post');

// get all the posts

router.get('/',async(req,res)=>{
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({message:error});
    }
})


// submit post
router.post('/',async (req,res)=>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    });
    const savePost = await post.save()
    res.json(savePost);
    
})

//get a specific post
router.get('/:postId',async(req,res)=>{
    const post = await Post.findById(req.params.postId)
    res.json(post)
})

//delete a specific post
router.delete('/:postId',async (req,res) =>{
    const removePost = await Post.remove({ _id : req.params.postId});
    res.json(removePost);
})

//update a specific post 

router.patch('/:postId',async (req,res)=>{
    const updatePost = await Post.updateOne({_id:req.params.postId},
        {
          $set:{ title:req.body.title}  
        });
    res.json(updatePost);
})



module.exports = router;