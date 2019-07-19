import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import * as actions from '../actions/loginAction';
import avatar from '../img/download.png';
import "./components.css";

class DashLinks extends Component {
    signOut = () => {
        this.props.signOut()
    }
    render() {
        return (
            <div className="row">
                <div className="col-10">
                    <ul className="nav nav-tabs container-fluid">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/experiences">
                                <h6>Experiences </h6>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/addexperience">
                                <h6>Create Experience </h6>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-2">
                    <div className="row">
                        <div className="col-6">
                            <Link to="/" onClick={this.signOut}>
                                <h6>Sign Out</h6>
                            </Link>
                            {/* <h6>Booking Alerts</h6> */}
                        </div>
                        <div className="col-6">
                            <img src={avatar} alt="Avatar" className="avatar" />
                            <p style={{ paddingLeft: 10 }}> Profile</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, actions)(DashLinks)
