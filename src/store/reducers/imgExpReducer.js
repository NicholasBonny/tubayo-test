import { IMAGE_ERROR, IMAGE_EXPERIENCE } from '../../actions/types';

const initState = {
    resMessage: '',
    errorMessage: ''
}

const imgExpReducer = (state = initState, action) => {
    switch (action.type) {
        case IMAGE_EXPERIENCE:
            return { ...state, resMessage: action.payload }
        case IMAGE_ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}

export default imgExpReducer