import React from 'react';
import { API_URL } from '../../config';
import { handleResponse } from '../../helper';
import './Search.css';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: "",
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;

    this.setState({ searchQuery: inputValue });

    // If searchQuery isn't present, dont send request to server
    if (!inputValue) {
      return '';
    }

    fetch(`${API_URL}/autocomplete?searchQuery=${inputValue}`)
      .then(handleResponse)
      .then((result) => {
        console.log(result);
      })
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChange} />
      </form>
    );
  }
}

export default Search;
