import React, { useEffect, useState } from 'react';
import { Button, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAddPost, fetchPosts, fetchSingleUser } from '../../redux/ActionCreators';
import SinglePostComponent from './SInglePostComponent';
import DetailedUserComponent from './DetailedUserComponent';
import { Control, LocalForm } from 'react-redux-form';

//function that passes state from store to props
const mapStateToProps = state => {
    return {
        posts: state.posts,
        user: state.singleUser
    }
}

//Function that allows us to call actions to form state 
const mapDispatchToProps = dispatch => ({
    fetchPosts: (id) => dispatch(fetchPosts(id)),
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
    addPost: (userId, title, body) => dispatch(fetchAddPost(userId, title, body))
})

const Posts = props => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    //Function for toggling popup for creating post
    const toogleModal = () => {
        setIsModalOpen(prev => !prev)
    }

    //Function for creating post after clicking on Submit
    const handleSubmit = values => {
        toogleModal();
        props.addPost(props.user.user.id, values.header, values.body)
    }

    //Hook that executes only once after page is rendered to fetch Posts and Single User, equivalent to componentDidMount
    useEffect(() => {
        props.fetchPosts(props.match.params.userId);
        props.fetchSingleUser(props.match.params.userId)
    }, []);

    //Maps through posts array
    const allPosts = props.posts.posts.map(el => {
        return(
            <SinglePostComponent key={el.id} post={el}/>
        )
    })

    //Renders all posts if they exist, otherwise renders error
    const RenderPosts = () => {
        if(props.posts.errorMessage){
            return <h2>{props.posts.errorMessage}</h2>
        }
        else{
            return(
                <div>{allPosts}</div>
            )
        }
    }

    //Renders detailed post if it exists, otherwise renders error
    const RenderDetailedUser = () => {
        if(props.user.errorMessage){
            return <h2>{props.user.errorMessage}</h2>
        }
        else{
            return <DetailedUserComponent user={props.user}/>
        }
    }

    return(
        <div className="container">
            <RenderDetailedUser/>
            <Row>
                <div className="col-sm-2">
                    <h4>Posts</h4>
                </div>
                <div className="col-sm-2">
                    <Button onClick={toogleModal} color="success">+Add New!</Button>
                </div>
            </Row>
            <Modal isOpen={isModalOpen} toggle={toogleModal}>
                <ModalHeader toggle={toogleModal}>Add New Post</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                        <div className="container">
                            <Row className="form-group">
                                <Label>Header</Label>
                                <Control.text
                                className="form-control"
                                model=".header"
                                name="header"
                                id="header"
                                placeholder="Header"/>
                            </Row>
                            <Row className="form-group">
								<Label htmlFor="body">Body</Label>
								<Control.textarea className="form-control"
								model=".body"
								name="body"
								id="body"
								rows="6"/>
							</Row>
                            <Row className="form-group">
								<Button type="submit" color="success">Submit</Button>
							</Row>
                        </div>
                    </LocalForm>
                </ModalBody>
            </Modal>
            <RenderPosts/>
        </div>
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));