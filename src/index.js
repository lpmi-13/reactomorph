import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import GameIndex from './components/gameIndex';
import List from './components/list';
import SearchDerivations from './components/searchDerivations';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={GameIndex} />
        <Route path="/search" component={SearchDerivations} />
      </Router>
    </div>
  );
}

ReactDOM.render(<Root />, document.querySelector('.container'));
