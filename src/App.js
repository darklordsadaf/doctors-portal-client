import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import AddDoctor from "./components/AddDoctor/AddDoctor";
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/appointment" >
            <Appointment />
          </Route>
          <PrivateRoute path="/dashboard/appointment" >
            <Dashboard />
          </PrivateRoute>
          <Route path="/dashboard/allPatients">
            <AllPatients></AllPatients>
          </Route>
          <Route path="/addDoctor">
            <AddDoctor />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
