import React from 'react';
import HeyArnold from '../../containers/HeyArnold'
import HeyArnoldDetail from '../../containers/HeyArnoldDetail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <HeyArnold {...routerProps}/> }
            />
           <Route
            path="/:id"
            exact
            render={(routerProps) => <HeyArnoldDetail {...routerProps}/> }
            />
        </Switch>
      </Router>
   </div>
      );
}


