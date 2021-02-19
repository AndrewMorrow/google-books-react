const router = require("express").Router();
const Book = require("../models/Book");

router.get("/", async (req, res) => {
    console.log("Get Route");
    try {
        const dbBookData = await Book.find({});
        res.status(200).json(dbBookData);
    } catch (err) {
        res.status(500).json({
            message: "Server Error",
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const dbBookData = await Book.create({
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

router.delete("/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        await Book.deleteOne({ _id: req.params.id });
        res.status(200).end();
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Server Error",
        });
    }
});

module.exports = router;
