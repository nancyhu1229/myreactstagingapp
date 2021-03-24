// 入口代码
// 代码 首先进入的是index.js  ，然后document.getElementById('root') 从public里找到dom
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//页面性能监测
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
