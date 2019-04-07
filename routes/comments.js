const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Comment = mongoose.model('Comment');
const jwt = require('express-jwt');
const _ = require('lodash');


const auth = jwt({
    secret: "SADDI_GADDI_VICH_BABBU_MAAN_CHALNA",
    userProperty: 'payload'
});

router.post('/', auth, (req, res) => {

    if(!req.payload._id){
        res.status(401).json({
            message: "Unauthorized Error, Login to continue"
        })
    } else {
        console.log(req.payload);
        const comment = new Comment();
        comment.text = req.body.comment;
        comment.by = req.payload._id;
        comment.name = req.payload.name;
        comment.save(err => {
            res.status(200).json({comment});
        })
    }

});

router.get('/', auth, (req, res) => {
    if(!req.payload._id){
        res.status(401).json({
            message: "Unauthorized Error, Login to continue"
        })
    } else {
        Comment.find({}, (err, comments) => {
            if(err){
                res.status(500).json({message: "Internal Server Error"});
                return;
            }

            res.status(200).json({comments});
        })
    }
});

router.put('/likes', auth, (req, res) => {
    if(!req.payload._id){
        res.status(401).json({
            message: "Unauthorized Error, Login to continue"
        })
    } else {
        Comment.findById(req.body._id)
            .exec((err, comment) => {
                comment.likes = comment.likes+1;
                comment.save(err => {
                    if(err){
                        res.status(500).json({message: "Internal Server Error"});
                        return;
                    }
                    res.status(200).json({comment});
                })
            })
    }
});

router.put('/dislikes', auth, (req, res) => {
    if(!req.payload._id){
        res.status(401).json({
            message: "Unauthorized Error, Login to continue"
        })
    } else {
        Comment.findById(req.body._id)
            .exec((err, comment) => {
                comment.dislikes = comment.dislikes+1;
                comment.save(err => {
                    if(err){
                        res.status(500).json({message: "Internal Server Error"});
                        return;
                    }
                    res.status(200).json({comment});
                })
            })
    }
});

module.exports = router;
