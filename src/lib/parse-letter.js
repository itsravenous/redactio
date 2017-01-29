'use strict';
import Inferno from 'inferno';
import sha1 from 'node-sha1';

import Word from '../Word';

/**
 * Replaces placeholders in letter with inputs
 * @param  {String}    letter
 * @param  {Function}  handler for word correctness state change
 * @return {JSX}
 */
function letterToJsx(letter, handler) {
  const letterHash = sha1(letter);
  const re = /\[[a-z\|]+\]/gi;
  const jsx = [];
  let cursor, result, count = 0;

  while(result = re.exec(letter)) {
    let len = result[0].length;
    let words = result[0].slice(1, len - 1);
    jsx.push(<span>{letter.slice(cursor, result.index)}</span>);
    cursor = result.index + len;
    // Unique key so that completion status isn't carried thru from previous letter
    const key = letterHash + cursor;
    jsx.push(<Word key={key} index={cursor} words={words.split('|')} onChange={handler} />);
    count++;
  };
  jsx.push(<span>{letter.slice(cursor)}</span>);

  return jsx;
}

export default letterToJsx;
