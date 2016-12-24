import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

require('es6-promise').polyfill();
require('isomorphic-fetch');

injectTapEventPlugin();

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
        <CardTitle title={title} subtitle="Card subtitle" />
        <CardText>
          {text}
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="SAGE" />
        </CardActions>
      </Card>
    )
  }
}

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

ReactDOM.render(
  <MuiThemeProvider>
    <Board />
  </MuiThemeProvider>,
  document.getElementById('root')
)
