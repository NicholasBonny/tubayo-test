import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/loginAction';
import CustomInput from '../components/CustomInput';


class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: ''
        }
        this.onSubmit = this.onSubmit.bind(this)

    }

    async onSubmit(formData) {
        await this.props.signin(formData)
        if (this.props.errorMessage) {
            this.setState({
                error: this.props.errorMessage,
            })
        }
        if (!this.state.error) {
            return this.props.history.push('/experiences')
        }
        console.log('state', this.props.newState)
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div className="mx-auto">
                <br />
                {
                    this.state.error ?
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            {this.state.error}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> :
                        null
                }
                <div className="card">
                    <div className="card-header">
                        <h5>Please Login!</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <div className="form-group">
                                <fieldset>
                                    <Field
                                        name="userName"
                                        type="text"
                                        id="userName"
                                        label="Host Username"
                                        component={CustomInput} />
                                </fieldset>
                            </div>
                            <div className="form-group">
                                <fieldset>
                                    <Field
                                        name="password"
                                        type="password"
                                        id="password"
                                        label="Enter your password"
                                        component={CustomInput} />
                                </fieldset>
                            </div>
                            <div className="col-md-5 col-sm-11 mx-auto my-3">
                                <button type="submit" className="btn btn-primary col-12">
                                    LogIn
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // errorMessage: state.auth.errorMessage,
        newState: state.auth
    }
}

// Field validation Start
const validate = formData => {
    const errors = {}
    if (!formData.userName) {
        errors.userName = 'Field Reqiured'
    }
    if (!formData.password) {
        errors.password = 'Field Reqiured'
    }
    return errors
}
// Field validation End

let newLoginForm = withRouter(LoginForm)

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'signin',
        validate
    })
)(newLoginForm)