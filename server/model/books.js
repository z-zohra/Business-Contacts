let mongoose = require('mongoose');
let bookModel = mongoose.Schema({
    Name: String,
    Number: Number,
    Email: String,

},

{
    collection:"books"
});

module.exports = mongoose.model('book',bookModel);