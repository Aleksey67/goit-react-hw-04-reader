import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Reader from '../Reader/Reader';
import NoMatch from '../NoMatch/NoMatch';
import publications from '../../data/publications.json';

const App = () => (
  <div>
    <Switch>
      <Route
        exact
        path="/reader"
        render={props => <Reader {...props} items={publications} />}
      />
      <Route path="*" component={NoMatch} />
    </Switch>
  </div>
);

export default App;
