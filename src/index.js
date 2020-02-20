import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Root from './Root';
import App from './components/app';
import CustomRouter from './Router/Router';

ReactDOM.render (
  <Root>
    <BrowserRouter>
      <App>
        <CustomRouter />
      </App>
    </BrowserRouter>
  </Root>,
  document.getElementById ('root')
);
