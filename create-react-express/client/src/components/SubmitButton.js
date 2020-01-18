import React, { Component } from "react";
// import API from "../utils/API"

class SubmitButton extends Component {
    constructor(props) {
        super(props)
        this.title = props.title;
        this.author = props.author; 
        this.description = props.description;
        this.image = props.image; 
        this.link = props.link;
    }

    handleBookSubmit = () => {
        console.log("click")
        // console.log(this.title)
        // API.saveBook({
        //     title: title,
        //     author: author,
        //     description: description,
        //     image: image,
        //     link: link
        // })
        //     .then(res => this.loadBooks())
        //     .catch(err => console.log(err));
    };
    
    render() {
        return (
            <button id="addBook" onClick = {()=> this.handleBookSubmit}>
                <img id="add-book-image" src="/imgs/heartplus.png" alt="plus" />
            </button>
        );
    }
}



export default SubmitButton;
