import axios from 'axios';

const {
    SET_EXPERIENCE,
    ADD_EXPERIENCE,
    GET_EXPERIENCE,
    EDIT_EXPERIENCE,
    EXPERIENCE_ERROR
} = require("./types");

export function setExperience(experience) {
    return {
        type: SET_EXPERIENCE,
        experience
    };
}

export function fetchExperiences() {
    return async dispatch => {
        try {
            const res = await axios.get(
                `http://localhost:5000/api/v1/experience/experiences`
            );
            dispatch(setExperience(res.data));
        } catch (error) {
            console.error("err", error);
        }
    };
}

export const addExperience = data => {
    return async dispatch => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/v1/experience/addExperience",
                data
            );
            // console.log('res', res.data)
            dispatch({
                type: ADD_EXPERIENCE,
                payload: res.data
            });
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: EXPERIENCE_ERROR,
                payload:
                    "Experience with title already exist! Please try again with another title."
            });
        }
    };
};

export const getExperienceById = data => {
    return async dispatch => {
        try {
            const res = await axios.get(
                "http://127.0.0.1:5000/api/v1/experience/" + data
            );
            // console.log('res', res.data)
            dispatch({
                type: GET_EXPERIENCE,
                payload: res.data
            });
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: EXPERIENCE_ERROR,
                payload:
                    "We are working on it, please try again later when we implement it."
            });
        }
    };
};

export const editExperience = (data, expId) => {
    return async dispatch => {
        try {
            console.log('data', data)
            console.log('expId', expId)
            const res = await axios.put(
                "http://127.0.0.1:5000/api/v1/experience/" + expId, data
            );
            // console.log('res', res.data)
            dispatch({
                type: EDIT_EXPERIENCE,
                payload: res.data
            });
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: EXPERIENCE_ERROR,
                payload:
                    "We are working on it, please try again later when we implement it."
            });
        }
    };
};
