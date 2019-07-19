import React, { Component } from "react";
import { connect } from "react-redux";
import { saveImgExp } from "../actions/images";


class ImageExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: null,
      emptyFileError: ""
    };
  }

  multipleFileChangedHandler = event => {
    this.setState({
      selectedFiles: event.target.files
    });
  };

  multipleFileUploadHandler = () => {
    // e.preventDefault()
    const data = new FormData();
    let selectedFiles = this.state.selectedFiles;

    // If file selected
    if (!selectedFiles) {
      this.setState({
        emptyFileError: "No File Selected!"
      });
    } else {
      for (let i = 0; i < selectedFiles.length; i++) {
        data.append("galleryImage", selectedFiles[i], selectedFiles[i].name);
      }

      this.props.saveImgExp(data, this.props.experienceId);
    }
    if (!this.props.errorMessage) {
      this.props.history.push("/experiences");
    }
  };
  render() {
    return (
      <div className="container" style={{ marginTop: "8rem" }}>
        {this.props.errorMessage ? (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <h6>{this.state.emptyFileError}</h6>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ) : null}

        <div
          className="card border-light mb-3"
          style={{ boxShadow: "0 5px 10px 2px rgba(195,192,192,.5)" }}
        >
          <div className="card-header">
            <h3 style={{ color: "#555", marginLeft: "12px" }}>
              Upload Experience Images{" "}
            </h3>
            <p className="text-muted" style={{ marginLeft: "12px" }}>
              Upload Size: 400px x 400px ( Max 2MB )
            </p>
          </div>
          <div className="card-body">
            <p className="card-text">
              Please upload the at most four Images for your ImageExperiences{" "}
            </p>
            <input
              type="file"
              multiple
              onChange={this.multipleFileChangedHandler}
            />
            <div className="mt-5">
              <button
                className="btn btn-info"
                onClick={this.multipleFileUploadHandler}
              >
                Upload!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    experienceId: state.add_experience.expId,
    errorMessage: state.img.errorMessage
  };
};

export default connect(
  mapStateToProps,
  { saveImgExp }
)(ImageExperience);
