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
      currentThread: undefined,
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
        <Header
          as='h1'
          style={{marginTop: 10}}
          onClick={() => this.setState({ currentThread: undefined })}
        >
          10chan
        </Header>

        {
          (this.state.currentThread)
            ? <div>
                <Header size='medium'>Трэд №{this.state.currentThread}</Header>
                <Item.Group divided>
                    {this.state.threads
                      .filter(thread => thread.id == this.state.currentThread)
                      .map(thread =>
                        <Thread
                          {...thread}
                          select={(currentThread) => this.setState({ currentThread })}
                        />
                      )}
                  </Item.Group>
              </div>
            : <div>
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
                
                <Item.Group divided>
                  {this.state.threads.map(thread =>
                    <Thread
                      {...thread}
                      select={(currentThread) => this.setState({ currentThread })}
                    />
                  )}
                </Item.Group>
              </div>
        }
      </Container>
    )
  }
}

export default Board;
