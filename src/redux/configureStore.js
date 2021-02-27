import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Posts } from './reducers/posts';
import { Users } from './reducers/users';
import { Comments } from './reducers/comments'
import { SingleUser } from './reducers/singleUser';
import { SinglePost } from './reducers/singlePost'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users: Users,
            posts: Posts,
            comments: Comments,
            singleUser: SingleUser,
            singlePost: SinglePost
        }),
        applyMiddleware(thunk, logger)
    )

    return store;
}