import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './Component/Header';
import Footer from './Component/Footer';
import AppRoutes from './routes/AppRoutes';
import styles from './theme/styles';
import withRoot from './withRoot';

const AppContainer = () => (
  <Router>
    <div>
      <Route component={NavBar} />
      <div className="App">
        <Switch>
          <Route path="/" component={AppRoutes} />
        </Switch>
      </div>
      <Route component={Footer} />
    </div>
  </Router>
);

const App = () => (
  <Router>
    <Route
      component={withRoot(
        withStyles(styles, { withTheme: true })(AppContainer)
      )}
    />
  </Router>
);

export default App;
