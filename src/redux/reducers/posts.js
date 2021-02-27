import * as ActionTypes from '../ActionTypes';

export const Posts = (state = {
        posts: [],
        errorMessage: null
    }, action) => {
    switch(action.type){
        case ActionTypes.LOAD_POSTS:
            return {...state, errorMessage: null, posts: action.payload}
        case ActionTypes.POSTS_FAILED:
            return{...state, errorMessage: action.payload, posts: []}
        case ActionTypes.ADD_POST:
            var post = action.payload;
            return {...state, posts: state.posts.concat(post)};
        default:
            return state
    }
}