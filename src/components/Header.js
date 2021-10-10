import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { LogOutAuthAction } from "../actions/AuthAction";

const Header = (props) => {
  const { auth, logout } = props;
  const history = useHistory();

  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to={auth.isLoggedIn?"/home":"/"} className="text-white navbar-brand">
          Social
        </Link>
        <div className="ml-auto d-flex">
          {(auth.isLoggedIn) && (
            <React.Fragment>
              <span className="text-white navbar-brand ">Hello, {auth.user.fullName}</span>
              <Link to="/post" className="btn  btn-head  ml-auto">
                Tweet
              </Link>
              <Link to="/connect" className="btn btn-head mx-2 ml-auto">
                Connect
              </Link>
              <button
                className="btn btn-white btn-sm mx-2"
                onClick={() => {
                  logout(history);
                }}
              >
                Log Out
            </button>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};


const mapStateToProps = (state) => {
  return {
    auth: state.authState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (history) => {
      dispatch(LogOutAuthAction(history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);