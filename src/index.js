import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store.js';
import App from './app.js';

const root = document.getElementById("app");

console.log('index.js');

// Состояние приложения
const store = new Store({
  items: [
    { code: 1, title: 'Javascript', price: 4000 },
    { code: 2, title: 'React', price: 5000 },
    { code: 3, title: 'Vue', price: 5000 },
    { code: 4, title: 'Angular', price: 5000 },
    { code: 5, title: 'Node.js', price: 4000 },
    { code: 6, title: 'Вёрсточка', price: 2000 },
    { code: 7, title: 'Хлебушек', price: 70 }
  ]
});

// Сообщаем реакту что и куда рендерить.
store.subscribe(() => {
  ReactDOM.render(<App store={store} />, root);
});

// Сообщаем реакту что и куда рендерить.
ReactDOM.render(<App store={store} />, root);
