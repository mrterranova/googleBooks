import React from "react";
import SubmitButton from "../components/SubmitButton"

function ContainerResults(props) {

    return (
        <div className="bookContainer">
            <ul className="list-group search-results">
                {props.results.map(result => (
                    <li className="list-group-item" key = { result.id } > 
                        <SubmitButton      
                            result = {result}
                        />
                        <a href={result.selfLink}>
                            <img className="bookPictures" src={result.volumeInfo.imageLinks.thumbnail} alt={result.id} />
                        </a>
                        <div className="information-search-div">
                            <h3>{result.volumeInfo.title}</h3>
                            <i><p>
                                Published by {result.volumeInfo.publisher}
                            </p></i>
                            <p>{result.volumeInfo.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContainerResults;