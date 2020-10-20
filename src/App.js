import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import WorkDetail from './components/WorkDetail/WorkDetail';
import AdminPanel from './components/AdminPanel/AdminPanel';
import NotFound from './components/NotFound/NotFound';
import VolunteerWork from './components/VolunteerWork/VolunteerWork';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    {/* <p>Name: {loggedInUser.name}</p> */}
    <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/adminPanel">
            <AdminPanel />
          </Route>
          <PrivateRoute path="/workdetail">
            
          </PrivateRoute>
          <Route path='/volunteers/:workdetailkey'>
          <WorkDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
