import React from "react";
// import API from "../utils/API"

function SubmitButton(props) {
console.log("Inside submitButton")
console.log(props)

let title = props.result.volumeInfo.title
let author = props.result.volumeInfo.authors[0]
console.log(title, author)

//     const handleBookSubmit = () => {
//         API.saveBook({
//             title: title,
//             author: author,
//             description: description,
//             image: image,
//             link: link,
//             date: Date()
//         })
//             .catch(err => console.log(err));
//     };

        return (
            // <button id="addBook" onClick = { handleBookSubmit} >
            //     <img id="add-book-image" src="./imgs/heartplus.png" alt="plus" />
            // </button>
            <div></div>
        );
}



export default SubmitButton;
