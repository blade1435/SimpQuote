import React from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Me fail English? That's unpossible.",
      character: "Ralph Wiggum",
      image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
    }
  }
  getNewQuote = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => response.data)
    .then(data => {
      this.setState({
        quote: data[0].quote,
        character: data[0].character,
        image: data[0].image,
      });
    });
  }
  render() {
    return(
      <div className="App">
        <QuoteCard simpsons={this.state} />
        <button type="button" onClick={this.getNewQuote}>Click here !</button>
      </div>
    );
  }
}
export default App;