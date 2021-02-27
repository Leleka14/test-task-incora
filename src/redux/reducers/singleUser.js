import * as ActionTypes from '../ActionTypes';

export const SingleUser = (state = {
        user: null,
        errorMessage: null
    }, action) => {
    switch(action.type){
        case ActionTypes.LOAD_SINGLE_USER:
            return {...state, errorMessage: null, user: action.payload}
        case ActionTypes.SINGLE_USER_FAILED:
            return{...state, errorMessage: action.payload, user: null}
        default:
            return state
    }
}