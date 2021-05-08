import logo from './logo.svg';
import './App.css';
import { List } from '@material-ui/core';

import { Redirect, Route, Switch } from 'react-router';
import SignInPage from './Pages/SignInPage';
import DashboardPage from './Pages/DashboardPage';
import MapPage from './Pages/MapsPage';


function App() {

  return (
    <div className="App">
      

      <Switch>
        <Route path="/signIn">
          <SignInPage />

        </Route>

        <Route path="/dashboard">
          <DashboardPage />
        </Route>

        <Route path="/maps">
          <MapPage />
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
