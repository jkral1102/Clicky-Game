import React from "react";
import "./Card.css";

const Card = props => (

    <div className="card" key={props.id} onClick={() => props.handleClick(props.id)}>
        <img className='cardImg' alt={props.name} title={props.name} src={props.image} />
    </div>

);

export default Card;