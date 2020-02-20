export default ({dispatch}) => next => action => {
  // check to see action passed to a promise to payload
  // if yes then resolve else send to next
  if (!action.payload || !action.payload.then) {
    return next (action);
  }
  action.payload.then (function (response) {
    const newAction = {...action, payload: response};
    dispatch (newAction);
  });
};
