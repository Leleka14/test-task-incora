import React from 'react';

const SingleCommentComponent = props => {
    return(
        <div className="comment">
            <h4 className="comment-name">{props.comment.name}</h4>
            <div className="comment-body">
                <div>{props.comment.email}</div>
                <div>{props.comment.body}</div>
            </div>
        </div>
    );
}

export default SingleCommentComponent;