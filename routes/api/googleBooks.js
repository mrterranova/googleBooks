import axios from "axios";

// Exporting the book based on the query

export default {
  searchBooks: function(bookSearch) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+ bookSearch);
  }
};