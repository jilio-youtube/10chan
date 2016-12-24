import React from 'react';
import ReactDOM from 'react-dom';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      threads: []
    }
  }
  componentDidMount() {
    fetch('/thread')
      .then(response => response.json())
      .then(threads =>
        this.setState({ threads })
      );
  }
  render() {
    return (
      <div>
      {this.state.threads.map(thread => (
        <div>
          <b>{thread.label}</b>
          <p>{thread.text}</p>
        </div>
      ))}
      </div>
    )
  }
}

ReactDOM.render(
  <Board/>,
  document.getElementById('root')
)
