import React from 'react';

const WordItem = props => {
  const word = props.word;
  const key = props.key;

  return (
    <button className="btn word-item" key={key} onClick={() => console.log(word)}>
      {word}
    </button>
  );
};

export default WordItem;
