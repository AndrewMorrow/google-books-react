import React, { useState } from "react";
import API from "../../utils/API";
import Form from "../Form/Form";

const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log("onSubmit");
        const res = await API.getBooks(query);
        const data = await res.json();

        setBooks(data.items);
        console.log(books);
    };

    return (
        <div>
            <Form
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                query={query}
            />
        </div>
    );
};

export default SearchPage;
