import React from 'react';
import Thread from './thread';

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
        <Thread
          title={thread.title}
          text={thread.text}
          image={thread.image}
        />
      ))}
      </div>
    )
  }
}

export default Board;
