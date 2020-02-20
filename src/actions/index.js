import axios from 'axios';
import {AUTH_USER, AUTH_ERROR, SAVE_COMMENT, FETCH_COMMENTS} from './types';

export const signup = (formProps, cb) => async dispatch => {
  try {
    const response = await axios.post (
      'http://localhost:3030/signup',
      formProps
    );
    dispatch ({type: AUTH_USER, payload: response.data.token});
    localStorage.setItem ('token', response.data.token);
    cb ();
  } catch (err) {
    dispatch ({type: AUTH_ERROR, payload: 'Email Alredy Exists'});
  }
};

export const signout = () => {
  localStorage.removeItem ('token');
  return {
    type: AUTH_USER,
    payload: '',
  };
};

export const signin = (formProps, cb) => async dispatch => {
  try {
    const response = await axios.post (
      'http://localhost:3030/signin',
      formProps
    );
    dispatch ({type: AUTH_USER, payload: response.data.token});
    localStorage.setItem ('token', response.data.token);
    cb ();
  } catch (err) {
    dispatch ({type: AUTH_ERROR, payload: 'Incorrect Email or Password'});
  }
};

export const saveComment = comment => dispatch => {
  dispatch ({type: SAVE_COMMENT, payload: comment});
};

export const fetchComments = () => async dispatch => {
  try {
    const response = await axios.get (
      'http://jsonplaceholder.typicode.com/comments'
    );
    dispatch ({
      type: FETCH_COMMENTS,
      payload: response.data,
    });
  } catch (e) {}
};
