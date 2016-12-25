import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Board from './components/board';

require('es6-promise').polyfill();
require('isomorphic-fetch');

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Board />
  </MuiThemeProvider>,
  document.getElementById('root')
)
