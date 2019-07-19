import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExperience } from '../actions/ExperienceActions';
import NavComponent from '../components/NavComponent';

class CreateExperience extends Component {

    constructor(props) {
        super(props)
        this.state = {
            experienceTitle: null,
            experienceCategory: null,
            userName: null,
            language: null,
            brifeDescription: null,
            location: null,
            experienceDescription: null,
            whatYouProvide: null,
            price: null,
            whatGuestsNeedToKno: null,
            formErrors: {
                experienceTitle: "",
                experienceCategory: "",
                userName: "",
                language: "",
                brifeDescription: "",
                location: "",
                experienceDescription: "",
                whatYouProvide: "",
                price: "",
                whatGuestsNeedToKno: "",
            }
        }
    }

    formValid = ({ formErrors, ...rest }) => {
        let valid = true
        Object.values(formErrors).forEach(val => {
            val.length > 0 && (valid = false)
        })

        Object.values(rest).forEach(val => {
            val === null && (valid = false)
        })

        return valid
    }

    handleSubmit = async e => {
        e.preventDefault()

        if (this.formValid(this.state)) {
            const {
                experienceTitle,
                experienceCategory,
                userName,
                language,
                brifeDescription,
                location,
                experienceDescription,
                whatYouProvide,
                price,
                whatGuestsNeedToKno } = this.state

            // find host by name
            const hosts = await axios.get('http://localhost:5000/api/v1/host/hosts')
            const host = hosts.data.find(host_data => host_data.userName === userName)

            this.props.addExperience({
                experienceTitle,
                experienceCategory,
                language,
                brifeDescription,
                location,
                experienceDescription,
                whatYouProvide,
                price,
                whatGuestsNeedToKno,
                hostedBy: host._id
            })
            console.log("props", this.props)
            if (this.props.errorMessage === "") {
                this.props.history.push('/addimageExperience')
            }
        }
        else {
            console.log("-- Something went wrong please try again! --")
        }
    }

    handleChange = e => {
        e.preventDefault()

        const { name, value } = e.target
        let formErrors = this.state.formErrors

        switch (name) {
            case "experienceTitle":
                formErrors.experienceTitle =
                    value.length < 3 ?
                        "Field required!" :
                        ""
                break;
            case "experienceCategory":
                formErrors.experienceCategory =
                    value.length < 3 ?
                        "Field required!" :
                        ""
                break;
            case "userName":
                formErrors.userName =
                    value.length < 3 ?
                        "Field required!" :
                        ""
                break;
            case "experienceDescription":
                formErrors.experienceDescription =
                    value.length < 3 ?
                        "Field required!" :
                        ""
                break;
            case "language":
                formErrors.language =
                    value.length < 3 ?
                        "Field required!" :
                        ""
                break;
            case "brifeDescription":
                formErrors.brifeDescription =
                    value.length < 3 ?
                        "Field required" :
                        ""
                break;
            case "location":
                formErrors.location =
                    value.length < 3 ?
                        "Field required!" :
                        ""
                break;
            case "whatYouProvide":
                formErrors.whatYouProvide =
                    value.length < 3 ?
                        "Field required!" :
                        ""
                break;
            case "price":
                formErrors.price =
                    value.length <= 0 ?
                        "Field required!" :
                        ""
                break;
            case "whatGuestsNeedToKno":
                formErrors.whatGuestsNeedToKno =
                    value.length < 3 ?
                        "Field required!" :
                        ""
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value })
    }

    render() {
        const { formErrors } = this.state

        return (
            <>
                <NavComponent />
                <div className="text-center">
                    <h2>Add Experience</h2>
                </div>
                <div className="card-body">
                    <div className="col-md-7 col-sm-11 mx-auto">
                        <form encType="multipart/form-data" onSubmit={this.handleSubmit} >
                            <div className="form-group">
                                <label >Host Username</label>
                                <input type="text"
                                    className="form-control"
                                    name="userName"
                                    noValidate
                                    onChange={this.handleChange} />
                                {formErrors.userName.length > 0 && (
                                    <span className="text-danger">{formErrors.userName}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label >Experience Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="experienceTitle"
                                    noValidate
                                    onChange={this.handleChange} />
                                {formErrors.experienceTitle.length > 0 && (
                                    <span className="text-danger">{formErrors.experienceTitle}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label  >Experience Category</label>
                                <select className="custom-select mr-sm-2" name="experienceCategory" onChange={this.handleChange}>
                                    <option defaultValue>Choose...</option>
                                    <option value="Wildlife">Wildlife</option>
                                    <option value="Safaris">Safaris</option>
                                    <option value="Camping">Camping</option>
                                    <option value="Hiking">Hiking</option>
                                    <option value="City Tour">City Tour</option>
                                    <option value="Lifestyle">Lifestyle</option>
                                    <option value="Art and Design">Art and Design</option>
                                    <option value="Sports">Sports</option>
                                    <option value="History">History</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Business">Business</option>
                                    <option value="Night life">Night life</option>
                                </select>
                                {formErrors.experienceCategory.length > 0 && (
                                    <span className="text-danger">{formErrors.experienceCategory}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label >Location of the Experience</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Bwindi"
                                    name="location"
                                    noValidate
                                    onChange={this.handleChange} />
                                {formErrors.location.length > 0 && (
                                    <span className="text-danger">{formErrors.location}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label >What language will you host in?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="English, Swahili, French ..."
                                    name="language"
                                    noValidate
                                    onChange={this.handleChange} />
                                {formErrors.language.length > 0 && (
                                    <span className="text-danger">{formErrors.language}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label >Describe your Experience in 5 words.</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="brifeDescription"
                                    noValidate
                                    onChange={this.handleChange} />
                                {formErrors.brifeDescription.length > 0 && (
                                    <span className="text-danger">{formErrors.brifeDescription}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label >Experience description. What will you do?</label>
                                <textarea type="text"
                                    className="form-control"
                                    name="experienceDescription"
                                    noValidate
                                    onChange={this.handleChange} />
                                {formErrors.experienceDescription.length > 0 && (
                                    <span className="text-danger">{formErrors.experienceDescription}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label>What will you provide</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Snacks and drinks, Transport, Accomodation, Tickets, Guide ..."
                                    name="whatYouProvide"
                                    noValidate
                                    onChange={this.handleChange} />
                                {formErrors.whatYouProvide.length > 0 && (
                                    <span className="text-danger">{formErrors.whatYouProvide}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label>How much is the Experience per person?(USD)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="0.00"
                                    name="price"
                                    noValidate
                                    onChange={this.handleChange} />
                                {formErrors.price.length > 0 && (
                                    <span className="text-danger">{formErrors.price}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label>What else do guests need to know?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="whatGuestsNeedToKno"
                                    noValidate
                                    onChange={this.handleChange} />
                                {formErrors.whatGuestsNeedToKno.length > 0 && (
                                    <span className="text-danger">{formErrors.whatGuestsNeedToKno}</span>
                                )}
                            </div>
                            <div className="my-4 mx-auto">
                                <button type="submit" className="btn btn-success">
                                    Submit
                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.add_experience.errorMessage,
        successRes: state.add_experience.successsMessage
        // expId: state.add_experience.expId
    }
}

export default connect(mapStateToProps, { addExperience })(CreateExperience)
