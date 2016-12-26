import React from 'react';
import Thread from './thread';
import { Container, Button, Item, Header } from 'semantic-ui-react';

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
      <Container>
        <Header as='h1' style={{marginTop: 10}}>10chan</Header>
        <Item.Group>
          {this.state.threads.map(thread => (
            <Thread
              title={thread.title}
              text={thread.text}
              image={thread.image}
            />
          ))}
        </Item.Group>
        <Button>Ответить в тред</Button>
      </Container>
    )
  }
}

export default Board;
