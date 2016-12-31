import Inferno from 'inferno';
import Component from 'inferno-component';
import Letter from './Letter';
import letter1 from './stories/last-transmission/letter1';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Letter letter={letter1}/>
      </div>
    );
  }
}

export default App;
