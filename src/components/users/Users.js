import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../redux/ActionCreators';
import SingleUserComponent from './SingleUserComponent';

//function that passes state from store to props
const mapStateToProps = state => {
    return{
        users: state.users
    }
}

//Function that allows us to call actions to form state 
const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers())
})

const UsersComponent = (props) => {

    //Hook that executes only once after page is rendered to fetch Users, equivalent to componentDidMount
    useEffect(() => {
        props.fetchUsers();
    }, [])

    //Maps through users array
    const allUsers = props.users.users.map(el => {
        return(
            <SingleUserComponent key={el.id} user={el}/>
        )
    })

    //Renders all users if they exist, otherwise renders error
    const RenderUsers = () => {
        if(props.users.errorMessage){
            return <h2>{props.users.errorMessage}</h2>
        }
        else{
            return <div>{allUsers}</div>
        }
    }

    return(
        <div className="container">
            <h3>Users</h3>
            <RenderUsers/>
        </div>
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersComponent));
