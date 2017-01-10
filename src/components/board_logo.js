import React from 'react';
import { Header } from 'semantic-ui-react';

class BoardLogo extends React.Component {
  render() {
    return (
      <Header
        as='h1'
        style={{marginTop: 10}}
        onClick={this.props.goBack}
      >
        10chan
      </Header>
    )
  }
}

export default BoardLogo;
