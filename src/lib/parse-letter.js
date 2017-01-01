'use strict';
import Inferno from 'inferno';

import Word from '../Word';

/**
 * Replaces placeholders in letter with inputs
 * @param  {String}    letter
 * @param  {Function}  handler for word correctness state change
 * @return {JSX}
 */
function letterToJsx(letter, handler) {
  const re = /\[[a-z]+\]/gi;
  const jsx = [];
  let cursor, result, count = 0;

  while(result = re.exec(letter)) {
    let len = result[0].length;
    let word = result[0].slice(1, len - 1);
    jsx.push(<span>{letter.slice(cursor, result.index)}</span>);
    cursor = result.index + len;
    jsx.push(<Word index={cursor} word={word} onChange={handler} />);
    count++;
  };
  jsx.push(<span>{letter.slice(cursor)}</span>);

  return jsx;
}

export default letterToJsx;