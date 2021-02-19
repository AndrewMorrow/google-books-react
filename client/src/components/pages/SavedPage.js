import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import SavedCard from "../SavedCard/SavedCard";
import "./bookDisplay.css";

const SavedPage = () => {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(async () => {
        console.log("GetBooks");
        const res = await API.getSavedBooks();
        const savedBookData = await res.json();
        setSavedBooks(savedBookData);
        console.log(savedBookData);
    }, []);

    const handleDeleteBook = async (bookId) => {
        await API.deleteBook(bookId);
        const res = await API.getSavedBooks();
        const savedBookData = await res.json();
        setSavedBooks(savedBookData);
    };

    return (
        <div>
            {savedBooks && savedBooks.length > 0 ? (
                savedBooks.map((book) => (
                    <SavedCard
                        key={book._id}
                        book={book}
                        handleDeleteBook={handleDeleteBook}
                    />
                ))
            ) : (
                <h1 className="noBooks">There are no saved books to display</h1>
            )}
        </div>
    );
};

export default SavedPage;
