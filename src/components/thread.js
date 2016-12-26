import React from 'react';
import { Image, Item } from 'semantic-ui-react';

class Thread extends React.Component {
  render() {
    const {title, text, image} = this.props;
    return (
      <Item>
        <Item.Image size='small' src={`images/${image}`} />
        <Item.Content>
          <Item.Header as='a'>{title}</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Description>
            {text}
            <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
          </Item.Description>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

export default Thread;
