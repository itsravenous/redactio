import Inferno from 'inferno';
import Component from 'inferno-component';

import './Word.css';

class Word extends Component {
  constructor(props) {
    super(props);
  }

  handleInput(e) {
    const correct = this.props.words.indexOf(e.target.value) !== -1;
    this.setState({correct});
    if(this.props.onChange) this.props.onChange(this, correct);
  }

  render() {
    const styles = {
      backgroundColor: this.state.correct ? 'yellow' : 'black',
      color: this.state.correct ? 'black' : 'white',
      width: this.props.words[0].length * 0.5 + 'rem'
    };
    return (
      <input className="word" style={styles} type="text" placeholder={this.props.word} onInput={this.handleInput.bind(this)} />
    );
  }
}

export default Word;
