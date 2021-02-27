import * as ActionTypes from '../ActionTypes';

export const Users = (state = {
        users: [],
        errorMessage: null
    }, action) => {
    switch(action.type){
        case ActionTypes.LOAD_USERS:
            return {...state, errorMessage: null, users: action.payload}
        case ActionTypes.USERS_FAILED:
            return{...state, errorMessage: action.payload, users: []}
        default:
            return state
    }
}