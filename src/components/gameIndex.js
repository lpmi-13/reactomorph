import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './header';

const GameIndex = () => {

  return (
    <div>
      <Header />
      <p>Sometimes, it's nice to know that a word like "unite" is related to other words like "unity", "union", and "unionize".</p>
      <p>On the "Search" page, you can search for words like this and see the related words.</p>
      <p>On the "List" page you can see a list of all the related words.</p>
    </div>
  );
}

export default GameIndex;
