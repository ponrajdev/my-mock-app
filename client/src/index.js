import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { configureStore } from "@reduxjs/toolkit";

import { library } from "@fortawesome/fontawesome-svg-core";


import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';

import postReducer from './store/post';

import rootSaga  from './store/rootSaga';
const sagaMiddle = createSagaMiddleware();

const store = configureStore({
  reducer : {
    post : postReducer
  },
  middleware :(getDefaultMiddle) => getDefaultMiddle().concat(sagaMiddle)
});

sagaMiddle.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Provider store={store}>
      <App />
      
    </Provider>
    </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
