import React from "react";
import API from "../utils/API"

function SubmitButton(props) {

let title = props.result.volumeInfo.title
let author = props.result.volumeInfo.publisher
let description = props.result.volumeInfo.description
let image = props.result.volumeInfo.imageLinks.thumbnail
let link = props.result.selfLink


    const handleBookSubmit = () => {
        API.saveBook({
            title: title,
            author: author,
            description: description,
            image: image,
            link: link,
            date: Date()
        })
            .catch(err => console.log(err));
    };

        return (
            <div>
            <button id="addBook" onClick = { () => handleBookSubmit()} >
                <img id="add-book-image" src="./imgs/heartplus.png" alt="plus" />
            </button>
            </div>
        );
}



export default SubmitButton;
