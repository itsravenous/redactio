import Inferno from 'inferno';
import Component from 'inferno-component';

import Word from './Word';
import parseLetter from './lib/parse-letter';

import './Letter.css';

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.letter !== this.props.letter) {
      this.setState({
        words: []
      });
    }
  }

  handleWord(word, correct) {
    this.setState((prevState, props) => {
      const words = prevState.words;
      words[word.props.index] = correct;
      return { words };
    });
  }

  render() {
    const letter = parseLetter(this.props.letter, this.handleWord.bind(this));
    const words = letter.filter(component => component.type && component.type.name === Word.name);
    const correct = this.state.words.filter(word => word);
    const complete = correct.length === words.length;

    return (
      <article className="letter">
        {letter}
        {complete && <button onClick={this.props.onComplete}>Next</button>}
      </article>
    );
  }
}

export default Letter;
