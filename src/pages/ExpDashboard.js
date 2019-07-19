import React, { Component } from 'react';
import DashboardContainer from '../components/DashboardContainer';
import NavComponent from '../components/NavComponent';

class ExpDashboard extends Component {

    render() {
        return (
            <>
                <NavComponent />
                <DashboardContainer />
            </>
        )
    }
}

export default ExpDashboard
