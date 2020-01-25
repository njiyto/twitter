import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import middleware from './middleware';
import './index.css';
import App from './components/App';

const store = createStore(reducer, middleware);

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)



ReactDOM.render(<Main />, document.getElementById('root'))