import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom"
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
          </ul>
          <hr />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </BrowserRouter>
  );
}

export default App;
