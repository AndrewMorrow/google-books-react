const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.mongoURI || "mongodb://localhost/googlebooks",
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            }
        );
        console.log("Mongo Connected");
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = connectDB;
