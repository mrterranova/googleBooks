import React from "react";
import SubmitButton from "../components/SubmitButton"

function ContainerResults(props) {
    return (
        <div className="bookContainer">
            <ul className="list-group search-results">
                {props.results.map(result => (
                    <li className="list-group-item">
                        <a href={result.selfLink}>
                            <img className="bookPictures" src={result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.authors} />
                        </a>
                        <div className="information-search-div">
                            <h3>{result.volumeInfo.title}</h3>
                            <i><p>
                                {result.volumeInfo.authors.splice(",").join(", ")}
                            </p></i>
                            <p>{result.volumeInfo.description}</p>
                        </div>
                        <SubmitButton 
                            title = {result.volumeInfo.title}
                            author = {result.volumeInfo.authors}
                            description = {result.volumeInfo.description}
                            image = {result.volumeInfo.imageLinks.thumbnail}
                            link = {result.selfLink}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContainerResults;