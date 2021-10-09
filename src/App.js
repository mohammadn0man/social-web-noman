import "./style/App.scss";
import Header from './components/Header';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import ConnectWithUser from './components/ConnectWithUser';
import Register from './components/Register';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { AuthActionType } from "./actions/AuthAction";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  axios.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response !== undefined && error.response.status === 401) {
      dispatch({
        type: AuthActionType.LOGOUT_SUCCESS,
        payload: {},
      });
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("auth");
      history.push('/login');
    }
    return error;
  });

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="py-3">
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/" component={Login} />
              <Route exact path="/connect" component={ConnectWithUser} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
