import './index.css'
import React from 'react'
import { Store } from './store'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import TVApp from './components/tvApp/TVApp'
import reportWebVitals from './reportWebVitals'


ReactDOM.render(
  <Provider store={Store}>
    <TVApp />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
