import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const toAbsolute=(n)=>n>0?n:'('+Math.abs(n)+')';

console.log(toAbsolute(5));
console.log(toAbsolute(10));
console.log(toAbsolute(-5));
console.log(toAbsolute(-10));