import React from 'react';
import Thread from './thread';
import { Container, Button, Item, Header, Form } from 'semantic-ui-react';
import Dropzone from 'react-dropzone-component';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      threads: [],

      newPostText: '',
      newPostImage: undefined,
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
        <Button>Создать тред</Button>

        <Form>
          <Form.Field>
            <label>Сообщение</label>
            <input placeholder='Оп молодец' onChange={
              (event) => this.setState({ newPostText: event.target.value })
            }/>
          </Form.Field>
          <Form.Field>
            <Dropzone
              config={{ postUrl: 'no-url' }}
              eventHandlers={{
                addedfile: (file) => this.setState({ newPostImage: file })
              }}
              djsConfig={{ autoProcessQueue: false }}
            />
          </Form.Field>
          <Button onClick={this.submit.bind(this)}>Отправить</Button>
        </Form>
      </Container>
    )
  }

  submit(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append('text', this.state.newPostText);
    formData.append('image', this.state.newPostImage);

    fetch('/thread', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }
}

export default Board;
