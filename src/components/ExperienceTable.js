import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExperiences } from '../actions/ExperienceActions';
import TBodyComponent from './TBodyComponent';

export class ExperienceTable extends Component {
    componentDidMount() {
        this.props.fetchExperiences();
    }
    render() {
        const { experience, hostId } = this.props;
        let count = 0
        // console.log('Experience', experience)
        if (!experience) {
            return (
                <div className="container">
                    <h5>experiences loading....</h5>
                </div>
            );
        }
        return (
            <div className="container-fluid">
                {/* Alert messages on submit start */}
                {
                    this.props.imgRes.errorMessage ?
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            {this.props.imgRes.errorMessage} You Experience might not display, Please Delete the Experience and try again!
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> :
                        null
                }
                {
                    this.props.imgRes.resMessage ?
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            Experience Images added successfully!
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> :
                        null
                }
                {/* Alert messages on submit End */}
                <table className="table table-hover">
                    <thead>
                        <tr style={{ color: "#fff", backgroundColor: "#003300" }}>
                            <th scope="col">No.</th>
                            <th scope="col">Title</th>
                            <th scope="col">Brief Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Language</th>
                            <th scope="col">Category</th>
                            <th scope="col">What You Provide</th>
                            <th scope="col">Place</th>
                            <th scope="col">Created Date</th>
                            <th scope="col">Comments</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {experience.map((hostExperiences) => {
                            if (hostExperiences.hostedBy === hostId) {
                                count = count + 1
                                return (
                                    <TBodyComponent
                                        key={hostExperiences._id}
                                        rowNumber={count}
                                        experience={hostExperiences}
                                    />
                                );
                            } else {
                                return null;
                            }
                        })}
                    </tbody>
                </table>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        experience: state.experiences,
        imgRes: state.img,
        hostId: state.auth.hostId
    };
};
export default connect(
    mapStateToProps,
    { fetchExperiences }
)(ExperienceTable);

