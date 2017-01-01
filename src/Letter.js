import Inferno from 'inferno';
import Component from 'inferno-component';

import parseLetter from './lib/parse-letter';

import './Letter.css';

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    };
  }

  handleWord(word, correct) {
    this.setState((prevState, props) => {
      const words = this.state.words;
      words[word.props.index] = correct;
      return { words };
    });
  }

  render() {
    const letter = parseLetter(this.props.letter, this.handleWord.bind(this));
    const words = letter.filter(component => component.type.name && component.type.name === 'Word');
    const correct = this.state.words.filter(word => word);
    const complete = correct.length === words.length;
    const styles = {
      backgroundColor: complete ? 'yellow' : 'white'
    }
    
    return (
      <article className="letter" style={styles}>
        {letter}
      </article>
    );
  }
}

export default Letter;
