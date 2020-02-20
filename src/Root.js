import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import StateValidator from './middleware/StateValidator';
import Reducers from './reducers';

export default ({children}) => {
  const store = createStore (
    Reducers,
    {
      auth: {authenticated: localStorage.getItem ('token')},
    },
    compose (
      applyMiddleware (reduxThunk, StateValidator),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__ ()
    )
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
