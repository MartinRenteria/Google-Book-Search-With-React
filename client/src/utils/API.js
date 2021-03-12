import axios from "axios";

// googlebooks API Query
const Url = "https://www.googleapis.com/books/v1/volumes?q="

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // Calls googlbooks API and retrieves books based on user input
    searchBooks: (query) => axios.get(Url + query),
    // Get all books saved in db
    getBooks: () => axios.get("/api/books"),
    // Saves book to the db
    saveBook: (bookData) => axios.post("/api/books", bookData),
    // Deletes a book with the given id
    deleteBook: (id) => axios.delete("api/books/" + id)
};