import React, { Component } from "react";
import Form from "../../components/Form";
import ContainerResults from "../../components/ContainerResults";
import API from "../../utils/googleAPI";


class Search extends Component {

  state = {
    search: "",
    results: []
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(this.state.search)
      .then(res => {
        this.setState ({ results : res.data.items })
      })
      .catch(err => this.setState({ error: err.message }));
  };

  
  render() {
    return (
      <div>
        <Form 
        value={this.state.search}
        handleInputChange = {this.handleInputChange}
        handleFormSubmit = {this.handleFormSubmit}
        />
        <ContainerResults  results = {this.state.results} />    
      </div>
    );
  }
}

export default Search;
