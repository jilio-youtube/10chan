import React from 'react';
import { Image, Item, Button } from 'semantic-ui-react';
import PostingForm from './thread_add_post';

class Thread extends React.Component {
  render() {
    const {id, text, image, select} = this.props;
    return (
      <Item>
        <Item.Image size='small' src={image} />
        <Item.Content>
          <Item.Header>
            №{id} <Button onClick={() => select(id)}>Ответ</Button>
          </Item.Header>
          {/*<Item.Meta>Description</Item.Meta>*/}
          <Item.Description>
            {text}
          </Item.Description>
          {/*<Item.Extra>Additional Details</Item.Extra>*/}
          <PostingForm thread={id}/>
        </Item.Content>
      </Item>
    )
  }
}

export default Thread;
