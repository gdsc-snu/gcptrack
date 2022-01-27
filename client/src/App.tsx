import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Profile from './pages/Profile/Profile'
import Dashboard from './pages/Dashboard/Dashboard'
import SearchPage from './Components/SearchPage/SearchInput/SearchPage';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Switch>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/'>
              <SearchPage />
            </Route>
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;

