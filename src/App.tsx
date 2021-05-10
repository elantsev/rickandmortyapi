import { Characters } from './components/Characters/Characters';
import './App.css';
import React from 'react';
import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import PaginationLink from './components/PaginationLinks/PaginationLinks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import FilterForm from 'components/Form/FilterForm';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Router>
      <Box className="App" mx={isMobile ? 1 : 4} >
        <header className="App-header">
          <Switch>
            <Route path="/characters">
              <FilterForm />
              <Characters />
              <PaginationLink />
            </Route>
            <Redirect to="/characters" />
          </Switch>
        </header>
      </Box>
    </Router>
  );
}

export default App;
