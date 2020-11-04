import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import LandingPage from "./LandingPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = '/'>
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
