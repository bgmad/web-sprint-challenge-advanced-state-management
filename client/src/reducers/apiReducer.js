import ACTION from '../actions/index';

const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

const apiReducer = (state = initialState, action)=>{
    switch (action.type) {
        case (ACTION.FETCH_INITIATE): 
            return  {
                ...state,
                isLoading: true,
                error: ''
            };
        case (ACTION.FETCH_SUCCESS):
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        case (ACTION.FETCH_FAIL):
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default apiReducer;