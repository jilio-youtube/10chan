import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';

require('es6-promise').polyfill();
require('isomorphic-fetch');

ReactDOM.render(
  <Board />,
  document.getElementById('root')
)
