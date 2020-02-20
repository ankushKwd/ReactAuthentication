import tv4 from 'tv4';
import StateScema from './StateScema';

export default ({dispatch, getState}) => next => action => {
  next (action);
  if (!tv4.validate (getState (), StateScema)) {
    console.warn ('Invalid state scema detected');
  }
};
