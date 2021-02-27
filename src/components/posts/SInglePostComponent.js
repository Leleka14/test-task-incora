import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Row } from 'reactstrap'

const SinglePostComponent = props => {
    const pathUrl = `/users/${props.post.userId}/posts/${props.post.id}`;
    return(
        <div className="post">
            <Row>
                <h2 className="col-sm-10">{props.post.title}</h2>
                <div className=" col-sm-2">
                    <Link to={pathUrl}>
                        <Button color="secondary">Details</Button>
                    </Link>
                </div>
            </Row>
            <p>{props.post.body}</p>
        </div>
    )
}

export default SinglePostComponent;