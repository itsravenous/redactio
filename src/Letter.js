import Inferno from 'inferno';
import Component from 'inferno-component';

import './Letter.css';

class Letter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const re = /\[[a-z]+\]/gi;
    const parsed = [];
    const words = [];
    let cursor, result;

    while(result = re.exec(this.props.letter)) {
      let len = result[0].length;
      let word = result[0].slice(1, len - 1);
      parsed.push(<span>{this.props.letter.slice(cursor, result.index)}</span>);
      parsed.push(<input type="text" placeholder={word} />);
      words.push(word);
      cursor = result.index + len;
    };
    parsed.push(<span>{this.props.letter.slice(cursor)}</span>);
    
    return (
      <article className="letter">
        {parsed}
      </article>
    );
  }
}

export default Letter;
