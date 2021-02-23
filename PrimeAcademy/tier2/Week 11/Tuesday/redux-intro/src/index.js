import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux setup - nmp instal redux react-redux
import { createStore, combineReducers } from 'redux';
// provider shares redux with react
import { Provider } from 'react-redux';

// value is a function
// two arguments - state and action
// this is called a reducer - a function that returns some state
// same as const [clickCount, setClickCount] = useState(0);
const clickCount = (state = 0, action) => {
  console.log('clickCount action', action);

  if (action.type === 'INCREASE_CLICK_COUNT') {
    return state + 1;
  } else if (action.type === 'DECREASE_CLICK_COUNT') {
    return state - 1;
  }

  return state;
};
// to use clickCount must pass into store

// element reducer
const elementList = (state = ['Hydrogen', 'Helium'], action) => {
  switch (action.type) {
    case 'ADD_ELEMENT':
      console.log('action', action);
      // this doesnt clone it
      // state.push(action.payload);

      // instead make a weird ass clone
      return [...state, action.payload];
  }

  return state;
}

// EVERY ACTION GOES TO EVERY REDUCER

// store = global state
// createStore only accepts a single reducer so must use combineReducers to combine
const store = createStore(
  combineReducers({
    // if key and value have same name, then you only need to write one of them.
    clickCount, // same as clickCount: clickCount,
    elementList, // same as elementList: elementList,
  })
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
