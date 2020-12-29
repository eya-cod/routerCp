import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from "redux";


const reducer = (state = initialState, action) => {
  console.log('reducer', state, action);
  return state;
  }  

const store = createStore(reducer);

ReactDOM.render(
  
    <App />
  ,
  document.getElementById('root')
);

