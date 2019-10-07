// React
import * as React from 'react';

// Router
import { Route, Switch } from 'react-router-dom';

// Components
import Header from 'components/Header';
import { HomePage, OrderPage } from 'components/Pages';

// Redux
import { connect } from 'react-redux';
import { initUser, loggedOut } from '../../actions';

// AWS
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react';
import { IUser } from '../../reducer/updateUser';

interface IApp {
  onUserInit: (userData: IUser) => void;
  authData: {
    username: string;
    attributes: {
      email: string;
    }
    pool: {
      clientId: string;
    }
  };
}

export const App: React.FC<IApp> = ({ authData, onUserInit }) => {
  React.useEffect(
    () => {
      onUserInit({
        id: authData.username,
        name: authData.username,
        email: authData.attributes.email,
      });
    },
    [authData.username, authData.attributes.email, onUserInit],
  );

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

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLoggedOut: () => dispatch(loggedOut),
    onUserInit: (userData: IUser) => initUser(userData, dispatch),
  };
};

export default withAuthenticator(connect(() => ({}), mapDispatchToProps)(App), true);
