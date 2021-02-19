export default {
    getBooks: (query) => {
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    saveBook: (bookData) => {
        fetch(`api/books`, {
            method: "POST",
            body: JSON.stringify(bookData),
            headers: {
                "Content-Type": "application/json",
            },
        });
    },
    getSavedBooks: () => {
        return fetch(`api/books`);
    },
    deleteBook: (id) => {
        fetch(`api/books/${id}`, {
            method: "DELETE",
        });
    },
};
