const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: {type: String, required: true, default: "John Doe"},
    text: {type: String, required: true},
    likes: {type: Number, required: true, default: 0},
    dislikes: {type: Number, required: true, default: 0}
});

mongoose.model('Comment', commentSchema);
