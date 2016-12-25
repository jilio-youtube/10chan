import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Thread extends React.Component {
  render() {
    const {title, text, image} = this.props;
    return (
      <Card>
        <CardMedia>
          <img src={`images/${image}`} />
        </CardMedia>
        <CardTitle title={title} />
        <CardText>
          {text}
        </CardText>
        <CardActions>
          <FlatButton label="RAGE" />
          <FlatButton label="SAGE" />
        </CardActions>
      </Card>
    )
  }
}

export default Thread;
