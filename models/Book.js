const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
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
