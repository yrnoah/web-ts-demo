import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Index from '../views/Index';

const routes = [
  { path: '/', component: Index, exact: true },
];

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {
            routes.map((route, index) => <Route key={index} {...route} />)
          }
        </Switch>
      </BrowserRouter>
    )
  }
}
