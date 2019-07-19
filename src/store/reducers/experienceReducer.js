import { SET_EXPERIENCE } from '../../actions/types';

const experienceReducer = (state = [], action) => {
    switch (action.type) {
        case SET_EXPERIENCE:
            return action.experience
        default:
            return state
    }
}

export default experienceReducer