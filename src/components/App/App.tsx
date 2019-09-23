// React
import * as React from 'react';

// Router
import { Route, Switch } from 'react-router-dom';

// Components
import Header from 'components/Header';
import { HomePage, OrderPage } from 'components/Pages';

// Redux
import { connect } from 'react-redux';
import { IUser } from 'reducer/updateUser';
import { loggedIn, loggedOut } from '../../actions';

// AWS
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react';
import { awsClient } from 'utils';

// GraphQl
import graphqlTag from 'graphql-tag';
import { listBooks } from '../../graphql/queries';
import { createBook } from '../../graphql/mutations';

import Amplify, { Auth } from 'aws-amplify';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

(async () => {
  const result = await awsClient
    .mutate({
      mutation: graphqlTag(createBook),
      variables: {
        input: {
          author: 'testNameBook',
          title: 'newBook',
          price: 234,
          img: 'sdfsdf',
        },
      },
    });
  console.log(result.data);
})();

interface IApp {
  onLoggedIn: (object: IUser) => void;
  authData: {
    id: number;
    username: string;
    attributes: {
      email: string;
    }
    pool: {
      clientId: string;
    }
  };
}

const App: React.FC<IApp> = ({ authData, onLoggedIn }) => {
  React.useEffect(
    () => {
      onLoggedIn({
        id: Number(authData.pool.clientId),
        email: authData.attributes.email,
        name: authData.username,
      });
    },
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

const mapDispatchToProps = {
  onLoggedIn: loggedIn,
  onLoggedOut: loggedOut,
};

export default withAuthenticator(connect(() => ({}), mapDispatchToProps)(App), true);
