import React from 'react';

const WordDetail = ({ word }) => {
  if (!word) {
    return <div>Loading...</div>;
  }

  return (
    <div className="video-details col-md-8">
      <div className="details">
        <div>{word}</div>
      </div>
    </div>
  );
};

export default WordDetail;
