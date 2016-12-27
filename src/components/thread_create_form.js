import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Dropzone from 'react-dropzone-component';

class ThreadCreateForm extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      image: undefined,
    }
  }
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Сообщение</label>
          <input placeholder='Оп молодец' onChange={
            (event) => this.setState({ text: event.target.value })
          }/>
        </Form.Field>
        <Form.Field>
          <Dropzone
            config={{ postUrl: 'no-url' }}
            eventHandlers={{
              addedfile: (file) => this.setState({ image: file })
            }}
            djsConfig={{ autoProcessQueue: false }}
          />
        </Form.Field>
        <Button onClick={this.submit.bind(this)}>Отправить</Button>
      </Form>
    )
  }

  submit(event) {
    const {text, image} = this.state;
    event.preventDefault();

    let formData = new FormData();
    formData.append('text', text);
    formData.append('image', image);

    fetch('/thread', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }
}

export default ThreadCreateForm;
