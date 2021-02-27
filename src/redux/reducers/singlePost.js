import * as ActionTypes from '../ActionTypes';

export const SinglePost = (state = {
        post: null,
        errorMessage: null
    }, action) => {
    switch(action.type){
        case ActionTypes.LOAD_SINGLE_POST:
            return {...state, errorMessage: null, post: action.payload}
        case ActionTypes.SINGLE_POST_FAILED:
            return{...state, errorMessage: action.payload, post: null}
        default:
            return state
    }
}