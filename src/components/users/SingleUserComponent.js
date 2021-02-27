import { Button } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleUserComponent = props => {
    const websiteUrl = `https://${props.user.website}`;
    const pathUrl = `/users/${props.user.id}/posts`
    return(
        <div className="user">
            <h5 className="username">{props.user.username}</h5>
            <p className="name">{props.user.name}</p>
            <div className="row">
                <div className="col-sm">
                    <div>Email: {props.user.email}</div>
                    <div>City: {props.user.address.city}</div>
                </div>
                <div className="col-sm">
                    <div>Phone: {props.user.phone}</div>
                    <div>WebSite: <a href={websiteUrl}>{props.user.website}</a></div>
                </div>
                <div className="col-sm d-flex justify-content-center">
                    <Link to={pathUrl}>
                        <Button className outline color="primary">Posts</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SingleUserComponent;