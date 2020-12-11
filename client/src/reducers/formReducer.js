import ACTION from '../actions/index';

const initialFormState = {
    id: null,
    name: '',
    position: '',
    nickname: '',
    description: ''
}

const formReducer = (state = initialFormState, action) => {
    switch(action.type) {
        case (ACTION.NEW_SMURF_NAME):
            return {
                ...state,
                name: action.payload
            }
        case (ACTION.NEW_SMURF_POSITION):
            return {
                ...state,
                position: action.payload
            }
        case (ACTION.NEW_SMURF_NICKNAME):
            return {
                ...state,
                nickname: action.payload
            }
        case (ACTION.NEW_SMURF_DESCRIPTION):
            return {
                ...state,
                description: action.payload
            }
        case (ACTION.CLEAR_FORM):
            return initialFormState;
        default: 
            return state;
    }
}

export default formReducer;