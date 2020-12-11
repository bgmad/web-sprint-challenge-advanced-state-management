import axios from 'axios';

const ACTION = {
    FETCH_INITIATE: 'FETCH_INITIATE',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAIL: 'FETCH_FAIL',
    ADD_SMURF: 'ADD_SMURF',
    SET_ERROR: 'SET_ERROR'
}

export const fetchSmurfs = () => dispatch => {
    dispatch({type: ACTION.FETCH_INITIATE});
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => dispatch({type: ACTION.FETCH_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: ACTION.FETCH_FAIL, payload: err}));
} 

export const postSmurf = smurfData => dispatch => {
    dispatch({type: ACTION.FETCH_INITIATE});
    axios
        .post('http://localhost:3333/smurfs', smurfData)
        .then(res => console.log(res))
        .catch(err => console.error(err));
}

export default ACTION;
//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.