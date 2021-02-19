const router = require("express").Router();
const Book = require("../models/Book");

router.get("/", async (req, res) => {
    try {
        const dbBookData = await Book.find({});
    } catch (err) {
        res.status(500).json({
            message: "Server Error",
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const dbBookData = await Book.create({
            id: req.body.id,
            title: req.body.title,
            authors: req.body.authors,
            description: req.body.description,
            image: req.body.image,
            link: req.body.link,
        });
        res.status(200).end();
    } catch (err) {
        res.status(500).json({
            message: "Server Error",
        });
    }
});

module.exports = router;
