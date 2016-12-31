import Inferno from 'inferno';
import Component from 'inferno-component';

import letterToJsx from './lib/letter-to-jsx';

import './Letter.css';

class Letter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const parsed = letterToJsx(this.props.letter);
    
    return (
      <article className="letter">
        {parsed}
      </article>
    );
  }
}

export default Letter;
