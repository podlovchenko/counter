import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import Counter from './components';
import counterReducer from './reducers';
import './index.css';

const store = createStore(counterReducer);

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'PLUS' })}
    onDecrement={() => store.dispatch({ type: 'MINUS' })}
  />,
  document.body
);

render();
store.subscribe(render);
