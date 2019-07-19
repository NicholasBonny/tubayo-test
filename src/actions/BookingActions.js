import axios from 'axios';

const {
    SET_BOOKING,
    ADD_BOOKING,
    BOOKING_ERROR
} = require("./types");

export function setBooking(booking) {
    return {
        type: SET_BOOKING,
        booking
    };
}

export function fetchBookings() {
    return async dispatch => {
        try {
            const res = await axios.get(
                `http://127.0.0.1:8000/api/v1/bookings/viewBookings`
            );
            dispatch(setBooking(res.data));
        } catch (error) {
            console.error("err", error);
        }
    };
}