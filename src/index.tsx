import React from 'react';
import { App } from './App';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
      {
        id: 1,
        title: 'Desenvolvedor Mobile',
        type: 'deposit',
        category: 'Dev',
        amount: 8000,
        createdAt: new Date('2021-12-08 09:00:00')
      },
      {
        id: 2,
        title: 'Carro',
        type: 'withdraw',
        category: 'Automóvel',
        amount: 1500,
        createdAt: new Date('2021-12-12 11:00:00')
      },
      {
        id: 3,
        title: 'Casa',
        type: 'withdraw',
        category: 'Casa',
        amount: 2500,
        createdAt: new Date('2021-12-16 11:00:00')
      },
    ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
