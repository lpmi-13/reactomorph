import React from 'react';
import WordListItem from './word_list_item';

const WordList = (props) => {

  const tag_to_class_map = {
    'N' : 'Noun',
    'V' : 'Verb',
    'AJ' : 'Adjective',
    'AV' : 'Adverb'
  }

    const wordItems = (props.words.length > 0) ? props.words.map((word) => {
      return <WordListItem
               key={word.word + '_' + word.word_class}
               word={word.word}
               word_class={tag_to_class_map[word.word_class]} />
    }) : <WordListItem word={'nothing found'} />;

    return (
      <ul className="list-group">
        {wordItems.length > 0 ? wordItems : ''} 
      </ul>
    );

}

export default WordList;
