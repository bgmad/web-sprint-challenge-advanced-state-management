import { initialState } from '.';
import ACTION from '../actions/index';

const formState = {
    id: null,
    name: '',
    position: '',
    nickname: '',
    description: ''
}

const formReducer = (state = formState, action) => {
    switch(action.type) {
        case ("NEW_SMURF_NAME"):
            return {
                ...state,
                name: action.payload
            }
        case ("NEW_SMURF_POSITION"):
            return {
                ...state,
                position: action.payload
            }
        case ("NEW_SMURF_NICKNAME"):
            return {
                ...state,
                nickname: action.payload
            }
        case ("NEW_SMURF_DESCRIPTION"):
            return {
                ...state,
                description: action.payload
            }
        case ("CLEAR_FORM"):
            return formState;
        default: 
            return state;
    }
}

export default formReducer;