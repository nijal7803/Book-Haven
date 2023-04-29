const express = require("express");
const router = express.Router();
const Book = require("../model/book");
const bookController = require("../controllers/bookController");

router.get("/", bookController.getAllBooks);
router.post("/", bookController.addBook);
router.get("/:id",bookController.getBookById);
router.put("/:id",bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;