import { EXPERIENCE_ERROR, GET_EXPERIENCE } from '../../actions/types';

const initState = {
    experience: null,
    errorMessage: ''
}

const fetchedExperience = (state = initState, action) => {
    switch (action.type) {
        case GET_EXPERIENCE:
            return { ...state, experience: action.payload }
        case EXPERIENCE_ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}

export default fetchedExperience