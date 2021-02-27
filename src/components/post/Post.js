import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Control, LocalForm } from 'react-redux-form';
import { withRouter } from 'react-router-dom';
import { Button, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { fetchComments, fetchDeletePost, fetchSinglePost, fetchUpdatePost } from '../../redux/ActionCreators';
import DetailedPostComponent from './DetailedPostComponent';
import SingleCommentComponent from './SIngleCommentComponent';

//function that passes state from store to props
const mapStateToProps = state => {
    return{
        comments: state.comments,
        post: state.singlePost
    }
}

//Function that allows us to call actions to form state 
const mapDispatchToProps = dispatch => ({
    fetchComments: (id) => dispatch(fetchComments(id)),
    fetchSinglePost: (id) => dispatch(fetchSinglePost(id)),
    fetchUpdatePost: (id, userId, title, body) => dispatch(fetchUpdatePost(id, userId, title, body)),
    fetchDeletePost: (id, userId) => dispatch(fetchDeletePost(id, userId))
})

const Post = props => {

    const [currentPost, setCurrentPost] = useState({
        id: null,
        userId: null,
        title: null,
        body: null
    })

    const [modalEdit, setModalEdit] = useState(false);

    //Hook that executes only once after page is rendered to fetch Comments and Single Post, equivalent to componentDidMount
    useEffect(() => {
        props.fetchComments(props.match.params.postId);
        props.fetchSinglePost(props.match.params.postId)
    }, [])

    //Function for toggling popup for editing post
    const toggleModalEdit = (elem) => {
        setModalEdit(prev => !prev);
        if(elem){
            setCurrentPost(prev => {
                return{...prev, id: elem.id, title: elem.title, body: elem.body, userId: elem.userId}
            })
        }
    }

    //Function for updating post after editing on clicking Submit
    const handleSubmit = () => {
        toggleModalEdit()
        props.fetchUpdatePost(currentPost.id, currentPost.userId, currentPost.title, currentPost.body)
    }

    //Function that invokes after changing value of input Title for editing Post
    const changeInputTitle = (event) => {
        setCurrentPost(prev => {
            return{...prev, title: event.target.value}
        })
    }

    //Function that invokes after changing value of input Body for editing Post
    const changeInputBody = (event) => {
        setCurrentPost(prev => {
            return{...prev, body: event.target.value}
        })
    }

    //Function that calls fetchDeletePost() from props to delete Post
    const deletePostHandler = (elem) => {
        props.fetchDeletePost(elem.id, elem.userId)
    }

    //Maps through comments array
    const allComments = props.comments.comments.map(el => {
        return(
            <SingleCommentComponent key={el.id} comment={el}/>
        )
    })

    //Renders all comments if they exist, otherwise renders error
    const RenderComments = () => {
        if(props.comments.errorMessage){
            return (
                <h2>{props.comments.errorMessage}</h2>
            )
        }
        else{
            return(
                <div>{allComments}</div>
            )
        }
    }
    
    //Renders detailed post
    const RenderDetailedPost = () => {
        if(props.post.post) {
            return <DetailedPostComponent deletePost={() => deletePostHandler(props.post.post)} toggleModalEdit={() => toggleModalEdit(props.post.post)} post={props.post.post}/>
        }
        else{
            return <div>Loading..</div>
        }
    }

    return(
        <div className="container">
            <h2>Post</h2>
            <RenderDetailedPost/>
            <Modal isOpen={modalEdit} toggle={toggleModalEdit}>
                <ModalHeader toggle={toggleModalEdit}>Edit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                        <div className="container">
                            <Row className="form-group">
                                <Label htmlFor="title">Title</Label>
                                <Control.text
                                className="form-control"
                                model=".title"
                                name="title"
                                id="title"
                                value={currentPost.title}
                                onChange={changeInputTitle}/>
                            </Row>
                            <Row className="form-group">
								<Label htmlFor="text">Text</Label>
								<Control.textarea className="form-control"
								model=".text"
								name="text"
								id="text"
                                value={currentPost.body}
                                onChange={changeInputBody}
                                rows="5"/>
							</Row>
                            <Row className="form-group">
								<Button type="submit" color="success">Submit</Button>
							</Row>
                        </div>
                    </LocalForm>
                </ModalBody>
            </Modal>
            <div>
                <div className="">
                    <h4>Comments</h4>
                </div>
                <div className="container">
                    <RenderComments/>
                </div>
            </div>
        </div>
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));