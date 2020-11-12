import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { GameOfLife } from './components/GameOfLife';
import './index.css';

type Query = {
  [key: string] : string;
};

const queries = window.location.search.slice(1).split('&').reduce((o, kv) => {
  const [key, val] = kv.split('=');
  o[key] = val;
  return o;
}, {} as Query);

const width = parseInt(queries['width'] ?? '100');
const height = parseInt(queries['height'] ?? '100');
const rate = parseFloat(queries['rate'] ?? '0.1');

ReactDOM.render(
  <React.StrictMode>
    <GameOfLife width={width} height={height} rate={rate} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
