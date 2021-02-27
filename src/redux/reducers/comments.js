import * as ActionTypes from '../ActionTypes';

export const Comments = (state = {
        comments: [],
        errorMessage: null
    }, action) => {
    switch(action.type){
        case ActionTypes.LOAD_COMMENTS:
            return {...state, errorMessage: null, comments: action.payload}
        case ActionTypes.COMMENTS_FAILED:
            return{...state, errorMessage: action.payload, comments: []}
        default:
            return state;
    }
}