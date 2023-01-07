import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Createuser from './components/Createuser';
import Updateuser from './components/Updateuser';


const App = () => {
  return (
    <div>
      {/* <Home/> */}
        <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/createUser" component={Createuser} />
          <Route path="/updateUser" component={Updateuser} />
          </Switch>
        </Router>
      
    </div>
  )
}

export default App