//actions
import axios from 'axios';

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';
export const ADD_SMURF = "ADD_SMURF";

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURF_START });
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log("success", res.data)
            dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.log("error", err.response)
            dispatch({ type: FETCHING_SMURF_FAILURE, payload: err.response });
        });
}

// export const addSmurf = () => dispatch => {
//     dispatch({ type: ADD_SMURF });
//     axios
//         .post('http://localhost:3333/smurfs')
//         console.log("posting")
//         dispatch({type: ADD_SMURF});

// }