import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import UsersComponent from './users/Users';
import Posts from './posts/Posts';
import Post from './post/Post';

const MainComponent = () =>{
   
    const PostsComponent = () => <Posts/>

    const PostComponent = () => <Post/>

    return(
        <Switch>
            <Route exact path="/users">
                <UsersComponent />
            </Route>
            <Route exact path="/users/:userId/posts" component={PostsComponent}/>
            <Route exact path="/users/:userId/posts/:postId" component={PostComponent}/>
            <Redirect to="/users"/>
        </Switch>
    )
}

export default MainComponent;