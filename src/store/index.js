import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import addExperienceReducer from './reducers/addExperienceReducer';
import authReducer from './reducers/auth';
import bookingReducer from './reducers/bookingReducer';
import editExperience from './reducers/editExperience';
import experienceReducer from './reducers/experienceReducer';
import fetchedExperience from './reducers/fetchedExperience';
import imgExpReducer from './reducers/imgExpReducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    experiences: experienceReducer,
    booking: bookingReducer,
    add_experience: addExperienceReducer,
    img: imgExpReducer,
    fetchedExp: fetchedExperience,
    edit_experience: editExperience
})

export default rootReducer