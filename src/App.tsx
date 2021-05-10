import { Characters } from './components/Characters/Characters';
import './App.css';
import React from 'react';
import { Box } from '@material-ui/core';
import PaginationLink from './components/PaginationLinks/PaginationLinks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Box className="App">
        <header className="App-header">
          <Switch>
            <Route path="/characters">
              <Characters />
              <PaginationLink />
            </Route>
          </Switch>
        </header>
      </Box>
    </Router>
  );
}

export default App;
