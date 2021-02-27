import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';

const DetailedPostComponent = props => {

    const [dropdownOpen, setOpen] = useState(false);

    //Function for toggling dropdown buttons
    const toggle = () => setOpen(!dropdownOpen);

    //Path to previous page after post is deleted
    const urlPath = `/users/${props.post.userId}/posts`;
    
    return(
        <div className="detailed-post col-lg-8">
            <Row>
                <h2 className="col-sm-10">{props.post.title}</h2>
                <div className="col-sm-2">
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            <i class="fa fa-lg fa-ellipsis-v"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={props.toggleModalEdit}>
                                <Button color="secondary">Edit</Button>
                            </DropdownItem>
                            <DropdownItem onClick={props.deletePost}>
                                <Link to={urlPath}><Button outline color="danger">Delete</Button></Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>
            </Row>
            <p className="detailed-post-body">{props.post.body}</p>
        </div>
    )
}

export default DetailedPostComponent;