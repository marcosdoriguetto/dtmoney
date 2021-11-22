import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          category: 'Food',
          type: 'deposity'
        },
        {
          id: 2,
          title: 'Transaction 2',
          amount: 600,
          category: 'Shoes',
          type: 'withdraw'
        },
        {
          id: 3,
          title: 'Transaction 3',
          amount: 400,
          category: 'Food',
          type: 'withdraw'
        },
        {
          id: 4,
          title: 'Transaction 4',
          amount: 7000,
          category: 'Salary',
          type: 'deposity'
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
