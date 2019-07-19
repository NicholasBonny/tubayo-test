import React from 'react';

function BookingTable({ booking, rowNumber }) {
    return (
        <>
            <tr>
                <th scope="row">{rowNumber}</th>
                <td>{booking.bookingDate}</td>
                <td>{booking.experiencePaidFor}</td>
                <td>{booking.firstName}</td>
                <td>{booking.lastName}</td>
                <td>{booking.accomodation}</td>
                <td>{booking.numberOfGuests}</td>
                {/* <td>
                    <button className="btn btn-danger my-3">Delete</button>
                </td> */}
            </tr>
        </>
    )
}

export default BookingTable
