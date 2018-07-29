import React from "react";
import './header.css';

const Header = props => (
    <header className="header">
        <div className="title">
            <p>Memory Game</p>

        </div>

            <div className="message" onChange={this.handleChange}>
                <p>{props.message}</p>
            </div>


        <div className="scores">
            <p>Current Score: {props.score} | Highest Score: {props.highscore}</p>
        </div>
    </header>
);
export default Header;