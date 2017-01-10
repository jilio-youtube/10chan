import React from 'react';
import { Container, Button, Item, Header } from 'semantic-ui-react';
import BoardLogo from './board_logo';
import Thread from './thread';
import ThreadCreateForm from './thread_create_form';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      threads: [],
      currentThread: undefined,
    }
  }
  componentDidMount() {
    fetch('/thread')
      .then(response => response.json())
      .then(threads => this.setState({ threads }));
  }
  render() {
    return (
      <Container>
        <BoardLogo goBack={() => this.setState({ currentThread: undefined })}/>

        {
          (this.state.currentThread)
            ? <Header size='medium'>Трэд №{this.state.currentThread}</Header>
            : <ThreadCreateForm onSubmit={(threads) => this.setState({ threads })}/>
        }

        {this.renderThreads.bind(this)()}
      </Container>
    )
  }
  renderThreads() {
    return (
      <Item.Group divided>
          {this.state.threads
            .filter(thread => {
              if (!this.state.currentThread) return true;
              else return (thread.id == this.state.currentThread);
            })
            .map(thread =>
              <Thread
                {...thread}
                select={(currentThread) => this.setState({ currentThread })}
              />
            )}
        </Item.Group>
    )
  }
}

export default Board;
