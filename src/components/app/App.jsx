import React from 'react';
import HeyArnold from '../../containers/HeyArnold'
import HeyArnoldDetail from '../../containers/HeyArnoldDetail'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// function Home() {

// const handleClick = () => {
//   match={
//             params: '/'
// }
// };

// return <h1 onClick={handleClick}>App</h1>

// }

export default function App() {


  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
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


