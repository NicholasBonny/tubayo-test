import axios from 'axios';
import { IMAGE_ERROR, IMAGE_EXPERIENCE } from './types';

export const saveImgExp = (data, expId) => {
    return async dispatch => {
        try {
            data.append('expId', expId)
            axios.post('http://localhost:5000/api/v1/images/exp_imgs', data, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            })
                .then((response) => {
                    console.log('res', response);
                    if (200 === response.status) {
                        // If file size is larger than expected.
                        if (response.data.error) {
                            if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                                dispatch({
                                    type: IMAGE_ERROR,
                                    payload: 'Max size: 2MB'
                                })
                            } else if ('LIMIT_UNEXPECTED_FILE' === response.data.error.code) {
                                dispatch({
                                    type: IMAGE_ERROR,
                                    payload: 'Max 4 images allowed'
                                })
                            } else {
                                dispatch({
                                    type: IMAGE_ERROR,
                                    payload: 'Only Images allowed'
                                })
                            }
                        } else {
                            // Success
                            dispatch({
                                type: IMAGE_EXPERIENCE,
                                payload: response.data
                            })
                        }
                    }
                })

        } catch (error) {
            console.log('error', error)
            dispatch({
                type: IMAGE_ERROR,
                payload: 'We are working on it, please try again later when we implement it.'
            })
        }
    }
}