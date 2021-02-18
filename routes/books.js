const router = require("express").Router();
const Book = require("../models/Book");

router.post("/", (req, res) => {
    try {
        console.log("Post Route");
        // await Book.create({ title: "Test Title" });
        res.status(200);
    } catch (err) {
        res.status(500).json({
            message: "Server Error",
        });
    }
});

module.exports = router;
