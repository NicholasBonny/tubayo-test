import { ADD_EXPERIENCE, EXPERIENCE_ERROR } from '../../actions/types';

const initState = {
    successMessage: '',
    expId: '',
    errorMessage: ''
}

const addExperienceReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_EXPERIENCE:
            return { ...state, successMessage: action.payload.message, expId: action.payload.expId }
        case EXPERIENCE_ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}

export default addExperienceReducer