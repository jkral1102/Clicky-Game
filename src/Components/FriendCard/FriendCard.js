import React from "react";
import "./FriendCard.css";

const FriendCard = props => (

    <div className="friend" key={props.id} onClick={() => props.handleClick(props.id)}>
        <img alt={props.name} title={props.name} src={props.image} />
    </div>

);

export default FriendCard;