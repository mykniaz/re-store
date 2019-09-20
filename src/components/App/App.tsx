import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from 'components/Header';

import { HomePage, OrderPage } from 'components/Pages';

import awsAmplify, { API } from 'aws-amplify';
import awsExports from 'aws-exports';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react';
import { connect } from 'react-redux';
import { loggedIn, loggedOut } from '../../actions';
import { IUser } from 'reducer/updateUser';

awsAmplify.configure(awsExports);

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
      API


      onLoggedIn({
        id: Number(authData.pool.clientId),
        email: authData.attributes.email,
        name: authData.username,
      });
    },
  );

  const saveNote = async() => {
    const newNote = {
      body: {
        "NoteTitle": "My first note!",
        "NoteContent": "This is so cool!",
        "NoteId": this.state.noteId
      };
    };

    const path = "/books";

    // Use the API module to save the note to the database
    try {
      const apiResponse = await API.put("NotesCRUD", path, newNote)
      console.log("response from saving note: " + apiResponse);
      this.setState({apiResponse});
    } catch (e) {
      console.log(e);
    }
  }

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
