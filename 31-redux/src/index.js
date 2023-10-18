import React from 'react';
import ReactDOM from 'react-dom/client';
import App5 from './App5';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer, DEPOSIT, WITHDRAW } from './store/bankReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

// store 정의: 전역 상태를 관리하는 공간(하나의 프로젝트에 하나만!)
const store = configureStore({ reducer }, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App5 />
    </Provider>
  </React.StrictMode>
);
