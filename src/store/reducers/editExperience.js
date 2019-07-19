import { EDIT_EXPERIENCE, EXPERIENCE_ERROR } from '../../actions/types';

const initState = {
    successMessage: '',
    errorMessage: ''
}

const editExperience = (state = initState, action) => {
    switch (action.type) {
        case EDIT_EXPERIENCE:
            return { ...state, successMessage: action.payload.message }
        case EXPERIENCE_ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}

export default editExperience