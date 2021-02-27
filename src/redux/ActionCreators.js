import * as ActionTypes from './ActionTypes';
import { urlAPI } from './urlAPI';

//Users actions
export const loadUsers = users => ({
    type: ActionTypes.LOAD_USERS,
    payload: users
});

export const usersFailed = error => ({
    type: ActionTypes.USERS_FAILED,
    payload: error
})

export const fetchUsers = () => dispatch => {
    return fetch(`${urlAPI}/users`)
        .then(response => {
            if(response.ok) return response;
            else{
                var error = new Error('Error' + response.status + ': '+ response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errorMessage = new Error(error.errorMessage);
            throw errorMessage;
        })
        .then(response => response.json())
        .then(users => dispatch(loadUsers(users)))
        .catch(error => dispatch(usersFailed(error.message)))
}

export const loadSingleUser = user => ({
    type: ActionTypes.LOAD_SINGLE_USER,
    payload: user
})

export const singleUserFailed = error => ({
    type: ActionTypes.SINGLE_USER_FAILED,
    payload: error
})

export const fetchSingleUser = id => dispatch => {
    return fetch(`${urlAPI}/users/${id}`)
        .then(response => {
            if(response.ok) return response;
            else{
                var error = new Error('Error' + response.status + ': '+ response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errorMessage = new Error(error.errorMessage);
            throw errorMessage;
        })
        .then(response => response.json())
        .then(user => dispatch(loadSingleUser(user)))
        .catch(error => dispatch(singleUserFailed(error.message)))
}

//Posts actions
export const loadSinglePost = post =>({
    type: ActionTypes.LOAD_SINGLE_POST,
    payload: post
})

export const singlePostFailed = error => ({
    type: ActionTypes.SINGLE_POST_FAILED,
    payload: error
})

export const fetchSinglePost = id => dispatch =>{
    return fetch(`${urlAPI}/posts/${id}`)
        .then(response => {
            if(response.ok) return response;
            else{
                var error = new Error('Error' + response.status + ': '+ response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errorMessage = new Error(error.errorMessage);
            throw errorMessage;
        })
        .then(response => response.json())
        .then(post => dispatch(loadSinglePost(post)))
        .catch(error => dispatch(singlePostFailed(error.message)))
}

export const fetchUpdatePost = (id, userId, title, body) => dispatch => {
    console.log(id)
    const newComment = {
        id: id,
        userId: userId,
        title: title,
        body: body
    }

    return fetch(`${urlAPI}/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(newComment),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => {
            if(response.ok) return response;
            else{
                var error = new Error('Error' + response.status + ': '+ response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errorMessage = new Error(error.errorMessage);
            throw errorMessage;
        })
        .then(response => response.json())
        .then(post => dispatch(loadSinglePost(post)))
        .catch(error => dispatch(commentsFailed(error.message)))
}

export const fetchDeletePost = (id) => dispatch =>{
    return fetch(`${urlAPI}/posts/${id}`, {
        method: 'DELETE'
    })
}

export const loadPosts = posts => ({
    type: ActionTypes.LOAD_POSTS,
    payload: posts
})

export const postsFailed = error => ({
    type: ActionTypes.POSTS_FAILED,
    payload: error
})

export const fetchPosts = (id) => (dispatch) =>{
    return fetch(`${urlAPI}/posts?userId=${id}`)
        .then(response => {
            if(response.ok) return response;
            else{
                var error = new Error('Error' + response.status + ': '+ response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errorMessage = new Error(error.errorMessage);
            throw errorMessage;
        })
        .then(response => response.json())
        .then(posts => dispatch(loadPosts(posts)))
        .catch(error => dispatch(postsFailed(error.message)))
    
}

export const addPost = post => ({
    type: ActionTypes.ADD_POST,
    payload: post
});

export const fetchAddPost = (userId, title, body) => dispatch => {
    const newPost = {
        title: title,
        body: body,
        userId: userId
    }

    return fetch(`${urlAPI}/posts`, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error' + response.status + ': '+ response.statusText);
                error.response = response;
                throw error;

            }
        },
        error => {
            var errorMessage = new Error(error.errorMessage);
            throw errorMessage;
        })
        .then(response => response.json())
        .then(response => {
            dispatch(addPost(response))
        })
        .catch(error => { 
            console.log('Create Post: ', error.message);
            alert('Cannot create post')
        })
}

//Comments actions
export const loadComments = comments => ({
    type: ActionTypes.LOAD_COMMENTS,
    payload: comments
});

export const commentsFailed = error => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: error
});

export const fetchComments = id => dispatch =>{
    return fetch(`${urlAPI}/comments?postId=${id}`)
        .then(response => {
            if(response.ok) return response;
            else{
                var error = new Error('Error' + response.status + ': '+ response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errorMessage = new Error(error.errorMessage);
            throw errorMessage;
        })
        .then(response => response.json())
        .then(comments => dispatch(loadComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
}