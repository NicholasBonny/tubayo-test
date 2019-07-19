import React, { Component } from 'react';
import Flyer from '../components/Flyer';
import LoginForm from '../components/LoginForm';
import './pages.css';


export default class HomePage extends Component {
    render() {
        return (
            <div className=" home" style={{ backgroundColor: "#e6e6ff" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-1">
                            <LoginForm />
                        </div>
                        <div className="col-md-7 col-sm-1">
                            <Flyer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
