import { Component, React } from "react";
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import HomePage from './components/disco/home-page';
import GuardedRoute from './guarded-route';
import "./App.scss";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  handleChange(event) {
    if (event.target.name === "username") {
      this.setState({ username: event.target.value });
    }
    if (event.target.name === "password") {
      this.setState({ password: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  onCancel() {
    this.setState({
      username: "",
      password: "",
      enableLogin: false
    })
  }
  onLogin() {
    if (this.state.username && this.state.password) {
      this.setState({ enableLogin: true });
      localStorage.setItem("enable_login", true)
      this.props.login();
    } else {
      this.setState({ enableLogin: false });
      localStorage.setItem("enable_login", false);
      alert("Enter Username and Password!");
    }
  }
  render() {
    let username = this.state.username;
    localStorage.setItem('username', username);
    return (
      <Router>
        <form className="form" onSubmit={this.handleSubmit}>
          <h1 className="form-heading">Login</h1>
          <label className="form-labelheading">
            User Name: &nbsp;&nbsp;
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
          <br />
          <label className="form-labelheading">
            Password: &nbsp;&nbsp;
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          {localStorage.getItem("enable_login") === false && <p>Enter Username and Password!</p>}
          <br />
          <div className="btns-div">

            <button className="btn-log" onClick={this.onLogin}>
              <NavLink className="nav-link" exact activeClassName="current" to='/home'>Login</NavLink>
            </button>


          &nbsp;&nbsp;
          <button onClick={this.onCancel}>
              Cancel
          </button>
          </div>

        </form>
        <Switch>
          <GuardedRoute path='/home' component={HomePage} auth={this.props.auth} />
        </Switch>
      </Router>
    );
  }
}

export default observer(LoginPage);