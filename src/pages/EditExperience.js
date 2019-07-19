import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editExperience } from '../actions/ExperienceActions';
import NavComponent from '../components/NavComponent';

class EditExperience extends Component {

    constructor(props) {
        super(props)
        this.state = {
            experienceTitle: '',
            experienceCategory: '',
            language: '',
            brifeDescription: '',
            location: '',
            experienceDescription: '',
            whatYouProvide: '',
            price: '',
            whatGuestsNeedToKno: '',

        }
    }

    componentWillMount = async () => {
        let expId = this.props.match.params.id
        try {
            const res = await axios.get(
                "http://127.0.0.1:4000/api/v1/experience/" + expId
            );
            this.setState({
                experienceTitle: res.data.experienceTitle,
                experienceCategory: res.data.experienceCategory,
                language: res.data.language,
                brifeDescription: res.data.brifeDescription,
                location: res.data.location,
                experienceDescription: res.data.experienceDescription,
                whatYouProvide: res.data.whatYouProvide,
                price: res.data.price,
                whatGuestsNeedToKno: res.data.whatGuestsNeedToKno
            })
        } catch (error) {
            console.log("error", error);

        }
    }

    handleSubmit = async e => {
        e.preventDefault()

        const {
            experienceTitle,
            experienceCategory,
            language,
            brifeDescription,
            location,
            experienceDescription,
            whatYouProvide,
            price,
            whatGuestsNeedToKno } = this.state

        this.props.editExperience({
            experienceTitle,
            experienceCategory,
            language,
            brifeDescription,
            location,
            experienceDescription,
            whatYouProvide,
            price,
            whatGuestsNeedToKno,
        }, this.props.match.params.id)
        if (this.props.errorMessage === "") {
            this.props.history.push('/experiences')
        }
    }


    handleChange = e => {
        e.preventDefault()

        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    render() {
        const {
            experienceTitle,
            experienceCategory,
            language,
            brifeDescription,
            location,
            experienceDescription,
            whatYouProvide,
            price,
            whatGuestsNeedToKno } = this.state

        if (this.state === null) {
            return (
                <div className="container">
                    <h5>Loading....</h5>
                </div>
            )
        }

        return (
            <>
                <NavComponent />
                <div className="text-center">
                    <h2>Update Experience</h2>
                </div>
                <div className="card-body">
                    <div className="col-md-7 col-sm-11 mx-auto">
                        <form encType="multipart/form-data" onSubmit={this.handleSubmit} >

                            <div className="form-group">
                                <label >Experience Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="experienceTitle"
                                    noValidate
                                    defaultValue={experienceTitle}
                                    onChange={this.handleChange} />

                            </div>
                            <div className="form-group">
                                <label  >Experience Category</label>
                                <select className="custom-select mr-sm-2" name="experienceCategory" onChange={this.handleChange}>
                                    <option defaultValue>{experienceCategory}</option>
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

                            </div>
                            <div className="form-group">
                                <label >Location of the Experience</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Bwindi"
                                    name="location"
                                    defaultValue={location}
                                    noValidate
                                    onChange={this.handleChange} />

                            </div>
                            <div className="form-group">
                                <label >What language will you host in?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="English, Swahili, French ..."
                                    name="language"
                                    defaultValue={language}
                                    noValidate
                                    onChange={this.handleChange} />

                            </div>
                            <div className="form-group">
                                <label >Describe your Experience in 5 words.</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="brifeDescription"
                                    defaultValue={brifeDescription}
                                    noValidate
                                    onChange={this.handleChange} />

                            </div>
                            <div className="form-group">
                                <label >Experience description. What will you do?</label>
                                <textarea type="text"
                                    className="form-control"
                                    name="experienceDescription"
                                    defaultValue={experienceDescription}
                                    noValidate
                                    onChange={this.handleChange} />

                            </div>
                            <div className="form-group">
                                <label>What will you provide</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Snacks and drinks, Transport, Accomodation, Tickets, Guide ..."
                                    name="whatYouProvide"
                                    defaultValue={whatYouProvide}
                                    noValidate
                                    onChange={this.handleChange} />

                            </div>
                            <div className="form-group">
                                <label>How much is the Experience per person?(USD)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="0.00"
                                    name="price"
                                    defaultValue={price}
                                    noValidate
                                    onChange={this.handleChange} />

                            </div>
                            <div className="form-group">
                                <label>What else do guests need to know?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="whatGuestsNeedToKno"
                                    defaultValue={whatGuestsNeedToKno}
                                    noValidate
                                    onChange={this.handleChange} />

                            </div>
                            <div className="my-4 mx-auto">
                                <button type="submit" className="btn btn-success">
                                    Update Experience
                    </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Alert messages on submit start */}
                {
                    this.props.errorMessage ?
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            {this.props.errorMessage}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> :
                        null
                }
                {
                    this.props.successRes ?
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <h5>Experience Updated Successfully!</h5>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> :
                        null
                }
                {/* Alert messages on submit End */}
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.edit_experience.errorMessage,
        successRes: state.edit_experience.successMessage
        // expId: state.add_experience.expId
    }
}

export default connect(mapStateToProps, { editExperience })(EditExperience)
