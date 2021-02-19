import React, { useState } from "react";
import API from "../../utils/API";
import Form from "../Form/Form";
import CardContainer from "../CardContainer/CardContainer";
import "./bookDisplay.css";

const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        console.log(query);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const res = await API.getBooks(query);
        const data = await res.json();
        setBooks(data.items);
    };

    const handleSaveBook = (book) => {
        const bookData = {
            title: book.volumeInfo.title,
            image: book.volumeInfo.imageLinks.thumbnail,
            description: book.volumeInfo.description,
            authors: book.volumeInfo.authors,
            link: book.volumeInfo.canonicalVolumeLink,
        };
        API.saveBook(bookData);
    };

    return (
        <div>
            <Form
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                query={query}
            />
            {books && books.length > 0 ? (
                books.map((book) => (
                    <CardContainer
                        key={book.id}
                        book={book}
                        handleSaveBook={handleSaveBook}
                    />
                ))
            ) : (
                <h1 className="noBooks">No books to show</h1>
            )}
        </div>
    );
};

export default SearchPage;
