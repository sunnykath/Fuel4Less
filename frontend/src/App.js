import logo from './logo.svg';
import './App.css';
import { List } from '@material-ui/core';

import SimpleList from './ListComponent';
import { Redirect, Route, Switch } from 'react-router';
import SignInPage from './SignInPage';
import DashboardPage from './DashboardPage';
import MapsPage from './MapsPage';
import NavBar from './NavBar';

function App() {

  return (
    <div className="App">
      

      <Switch>
        <Route path="/signIn">
          <SignInPage />

        </Route>

        <Route path="/dashboard">
          <DashboardPage  />
        </Route>

        <Route path="/maps">
          <MapsPage />
        </Route>

        {/* If no other path matches, redirect to /articles */}
        <Route path="*">
          <Redirect to="/signIn" />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
