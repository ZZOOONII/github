import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}, 1000); // 1000 밀리초마다 App 컴포넌트를 다시 렌더링

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
