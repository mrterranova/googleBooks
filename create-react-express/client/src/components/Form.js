import React from "react";

function Form(props) {
    console.log("props",props)
    return (
        <div className="jumbotron jumbotron-fluid">
            <form>
                <div className="form-group form-jumbotron">
                    <label for="searchBook">Search</label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        list="books"
                        className="form-control"
                        id="searchBook"
                        placeholder="Search For A Book On..." />
                    <button type="submit" className="btn btn-primary search-submit-btn" onClick={props.handleFormSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;