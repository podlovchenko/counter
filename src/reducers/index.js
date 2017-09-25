const counterReducer = function(state, action) {
  if (state === undefined) {
    state = 0;
  }
  if (action.type === 'PLUS') {
    state++;
  }
  if (action.type === 'MINUS') {
    state--;
  }
  return state;
};

export default counterReducer;