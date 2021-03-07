import React from 'react'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 4 + this.props.increment
    }

    this.props = props ;
  }

  handleChange = () => {
    this.setState((prevState, prevProps) => {
      return {number: prevState.number + prevProps.increment}
    },
      () => { console.log(this.state.number)}
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <p>
            {this.state.number}
          </p>
          <button
            onClick={this.handleChange}
          >
            Click Me
          </button>
        </header>
      </div>
    );
  }
}
export default App;
