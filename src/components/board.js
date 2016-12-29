import React from 'react';
import { Container, Button, Item, Header } from 'semantic-ui-react';
import Thread from './thread';
import ThreadCreateForm from './thread_create_form';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      threads: [],
      showThreadCreateForm: false,
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

        {
          (this.state.showThreadCreateForm)
            ? <div>
                <Button onClick={() => this.setState({showThreadCreateForm: false})}>
                  Закрыть форму постинга
                </Button>
                <ThreadCreateForm onSubmit={(threads) => {
                  this.setState({ threads, showThreadCreateForm: false });
                }}/>
              </div>
            : <Button onClick={() => this.setState({showThreadCreateForm: true})}>
                Создать тред
              </Button>
        }

        <Item.Group>
          {this.state.threads.map(thread => (
            <Thread
              title={thread.title}
              text={thread.text}
              image={thread.image}
            />
          ))}
        </Item.Group>
      </Container>
    )
  }
}

export default Board;
