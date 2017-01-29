import Inferno from 'inferno';
import Component from 'inferno-component';
import Letter from './Letter';
import letters from './letters';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      letterNum: 0
    };

    this.handeLetterComplete = this.handeLetterComplete.bind(this);
  }

  handeLetterComplete(complete) {
    if(complete) {
      this.setState(previousState => {
        return { ...previousState, letterNum: previousState.letterNum + 1 };
      });
    }
  }

  render() {
    const { letterNum } = this.state;
    return (
      <div className="App">
        <Letter letter={letters[letterNum]} onComplete={this.handeLetterComplete} />
      </div>
    );
  }
}

export default App;
