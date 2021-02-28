import React from 'react'

const DetailedUserComponent = props => {
    if(props.user.user){
    const websiteUrl = `https://${props.user.user.website}`;
        return(
            <div className="detailed-user">
                <h3 className="detailed-user-name">{props.user.user.name}</h3>
                <div className="detailed-user-body">
                    <h6>@{props.user.user.username}</h6>
                    <div>Email: {props.user.user.email}</div>
                    <div>Phone: {props.user.user.phone}</div>
                    <div>City: {props.user.user.address.city}</div>
                    <div>Street: {props.user.user.address.street}</div>
                    <div>WorkPlace: {props.user.user.company.name}</div>
                    <div>WebSite: <a href={websiteUrl}>{props.user.user.website}</a></div>
                </div>
            </div>
        )
    }
    else{
        return <h4>Loading...</h4>
    }
}

export default DetailedUserComponent;