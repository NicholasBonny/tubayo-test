import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookings } from '../actions/BookingActions';
import BookingTable from '../components/BookingTable';
import NavComponent from '../components/NavComponent';

export class BookingDashboard extends Component {
    componentDidMount() {
        this.props.fetchBookings();
    }
    render() {
        // console.log('bookings', this.props.booking)
        const { booking} = this.props
        return (
            <div>
                <NavComponent />
                <div className="container-fluid">
                    <table className="table table-hover">
                        <thead>
                            <tr style={{ color: "#fff", backgroundColor: "#003300" }}>
                                <th scope="col">No.</th>
                                <th scope="col">Booking Date</th>
                                <th scope="col">Booked Experience</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Accommodation</th>
                                <th scope="col">Number of Guests</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {booking.map((book, index) => {
                                return (
                                    <BookingTable
                                        key={book._id}
                                        rowNumber={index + 1}
                                        booking={book} />
                                )
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        booking: state.booking
    };
};
export default connect(
    mapStateToProps,
    { fetchBookings }
)(BookingDashboard);
