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
            component={HeyArnold}
            />
           <Route
            path="/:id"
            exact
            component={HeyArnoldDetail} 
            />
        </Switch>
      </Router>
   </div>
      );
}


