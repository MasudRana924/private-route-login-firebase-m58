import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './Components/Home/Home'
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import Header from './Components/Header/Header';
import AuthProvider from './Components/ApiContext/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipping from './Components/Shipping/Shipping';
function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <PrivateRoute path="/shipping">
            <Shipping></Shipping>
          </PrivateRoute>
        </Switch>
      </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
