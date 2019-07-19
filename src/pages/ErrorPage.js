import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="container">
            <h1>404 Page Not Found!</h1>
            <h5> Back to
          <Link to='/' className="btn btn-success" style={{ marginLeft: 5 }}>Home</Link>
            </h5>
        </div>
    )
}

export default ErrorPage
