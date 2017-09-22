import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    }
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrementCount() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount.bind(this)}>+</button>
        <button onClick={this.decrementCount.bind(this)}>-</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter/>,
  document.body
);
