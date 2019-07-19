import { SET_BOOKING } from '../../actions/types';

const bookingReducer = (state = [], action) => {
    switch (action.type) {
        case SET_BOOKING:
            return action.booking
        default:
            return state
    }
}

export default bookingReducer