import Inferno from 'inferno';
import Component from 'inferno-component';

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
      backgroundColor: this.state.correct ? 'yellow' : 'white'
    };
    return (
      <input style={styles} type="text" placeholder={this.props.word} onInput={this.handleInput.bind(this)} />
    );
  }
}

export default Word;
