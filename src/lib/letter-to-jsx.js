'use strict';
import Inferno from 'inferno';

/**
 * Replaces placeholders in letter with inputs
 * @param  {String}  letter
 * @return {JSX}
 */
function letterToJsx(letter) {
  const re = /\[[a-z]+\]/gi;
  const parsed = [];
  const words = [];
  let cursor, result;

  while(result = re.exec(letter)) {
    let len = result[0].length;
    let word = result[0].slice(1, len - 1);
    parsed.push(<span>{letter.slice(cursor, result.index)}</span>);
    parsed.push(<input type="text" placeholder={word} />);
    words.push(word);
    cursor = result.index + len;
  };
  parsed.push(<span>{letter.slice(cursor)}</span>);

  return parsed;
}

export default letterToJsx;