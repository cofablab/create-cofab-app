import React from 'react';
import { render } from 'react-snapshot';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

render(<App />, rootEl);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(<App />, rootEl);
  });
}

registerServiceWorker();
