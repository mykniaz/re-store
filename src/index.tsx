import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';

import store from './store/store';

import awsAmplify from 'aws-amplify';
import awsExports from './aws-exports';
awsAmplify.configure(awsExports);

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
