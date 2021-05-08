import logo from './logo.svg';
import './App.css';
import { List } from '@material-ui/core';

import { Redirect, Route, Switch } from 'react-router';
import LogInPage from './Pages/LogInPage.js'
import SignUpPage from './Pages/SignUpPage'
import DashboardPage from './Pages/DashboardPage';
import MapsPage from './Pages/MapsPage';


function App() {

  return (
    <div className="App">
      

      <Switch>
        <Route path="/logIn">
          <LogInPage />
        </Route>

        <Route path="/signUp">
          <SignUpPage />
        </Route>

        <Route path="/dashboard">
          <DashboardPage />
        </Route>

        <Route path="/maps">
          <MapsPage />
        </Route>

        {/* If no other path matches, redirect to /articles */}
        <Route path="*">
          <Redirect to="/logIn" />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
