import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from 'components/Header';

import { HomePage, OrderPage } from 'components/Pages';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <Header/>
        <Switch>
          <Route
            path="/"
            exact={true}
            component={HomePage}
          />
          <Route
            path="/order"
            component={OrderPage}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
