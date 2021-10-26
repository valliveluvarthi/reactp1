import { observer } from 'mobx-react';
import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,BrowserRouter
} from "react-router-dom";
import Form from "../form";
import CircleInput from "./circle-input";
import BookFlightTickets from '../book-flight-tickets/book-flight-tickets';
import '../../App.scss';

class HomePage extends Component {
    constructor(props) {
        super()
        this.onLogout = this.onLogout.bind(this)
    }
    onLogout() {
        // localStorage.clear();
        localStorage.setItem("enable_login",false);
        localStorage.setItem("username","");
        this.props.history.push('/');
        this.props.logout()
    }
    render() {
        let username = localStorage.getItem("username");
        return (
            <BrowserRouter>
                {/* HashRouter component provides the foundation for the navigation
                 and browser history handling that routing is made up of */}
                <div>
                    <div className="row">
                        <div className="column1">
                            <h2>React Application of - {localStorage.getItem("username")}</h2>
                        </div>
                        <div className="column2">
                            <h3 onClick={this.onLogout} className="logout">Logout</h3>
                        </div>
                    </div>
                    <ul className="header">
                        <li><NavLink to="/cards">Cards</NavLink></li>
                        <li><NavLink to="/disco">Circles</NavLink></li>
                        <li><NavLink to="/booktickets">Flight Booking Web App</NavLink></li>
                    </ul>
                    <div className="content">
                        {/* Route component contains a path prop. 
                    The value you specify for the path determines when this route is going to be active */}
                        <Route path="/cards" component={Form} />
                        <Route path="/disco" component={CircleInput} />
                        <Route path="/booktickets" component={BookFlightTickets}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default observer(HomePage)