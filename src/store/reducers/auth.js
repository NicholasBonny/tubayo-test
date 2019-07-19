import { AUTH_ERROR, AUTH_SIGN_IN, AUTH_SIGN_OUT } from '../../actions/types';

const initState = {
    isAuthenticated: false,
    token: '',
    hostId: '',
    errorMessage: ''
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case AUTH_SIGN_IN:
            return { ...state, token: action.payload.token, hostId: action.payload.hostId, isAuthenticated: true, errorMessage: '' }
        case AUTH_SIGN_OUT:
            return { ...state, token: action.payload, isAuthenticated: false, errorMessage: '' }
        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}

export default authReducer