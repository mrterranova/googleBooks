import React, { Component } from "react";
import { ListBook, List } from "../../components/List";
import API from "../../utils/API";


class View extends Component {

  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
        // console.log(res)
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid view-header">
          <h1 className="title-view">Here's what the community recommends for your next read!</h1>
        </div>
        {this.state.books.length ? (
          <List>
            {this.state.books.map(book => (
              <ListBook key={book._id}>
                <button id="deleteBtn" onClick={() => this.deleteBook(book._id)} ><img id="deleteBtn-img" src={"./imgs/delete.png"} alt='delete' /></button>
            <a href={book.link}><img id="view-book-image" src={book.image} alt="book" /></a>
                 <div className="view-link-book-info">
                   <h2 className="view-title-book">{book.title}</h2> 
                   <p className="view-author-book">by <i>{book.author}</i></p>
                   <p className="view-description-book">{book.description}</p>
                 </div>
              </ListBook>
            ))}
          </List>
        ) : (
            <h3>Oh No! We need more books to read! Hurry and save more books!</h3>
          )}
      </div>
    );
  }
}

export default View;
