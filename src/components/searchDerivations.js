import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import Header from './header';
import SearchBar from './search_bar';
import WordList from './word_list';

const BASE_URL = 'https://micromaterials.org/derivation-api/?word=';

class SearchDerivations extends Component {

  constructor(props) {
    super(props);

    this.state = {
      words: []
    };

  }

  componentDidMount() {
    this.wordSearch('state');
  }

  wordSearch(term) {

    axios.get(BASE_URL + term)
      .then(response => {
        if (response.data) {
          this.setState({words: response.data});
        }
      });
  }

  render() {

    const initialSearch = _.debounce((term) => { this.wordSearch(term) }, 300);

    return (
      <div>
        <Header />
        <div>
          <h2>Search for related words</h2>
          <div>
            <SearchBar onSearchTermChange={initialSearch} />
            <WordList words={this.state.words === null ? [] : this.state.words} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchDerivations;
