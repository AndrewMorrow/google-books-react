const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
require("dotenv").config();

// middleware
app.use(express.json({ extended: false }));

// Connect Database
connectDB();

// Define routes
app.use("/api/books", require("./routes/books"));

// Server static assets in production
if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
}

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
