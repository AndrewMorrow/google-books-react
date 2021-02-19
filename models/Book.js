const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    title: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    authors: {
        type: mongoose.Schema.Types.Array,
    },
    description: {
        type: mongoose.Schema.Types.String,
    },
    image: {
        type: mongoose.Schema.Types.String,
    },
    link: {
        type: mongoose.Schema.Types.String,
    },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
