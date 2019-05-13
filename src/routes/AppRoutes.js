import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/index';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
 
});

class App extends Component {
  render() {
    const { match } = this.props;
       return (
        <Switch>
          <Route path={`${match.path}/`} component={Home}/>
        </Switch>
       
    );
  }
}

export default withStyles(styles)(App);
