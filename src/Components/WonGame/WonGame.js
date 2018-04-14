import React, { Component } from 'react';
import './WonGame.css';

class WonGame extends Component {


    render() {
        return (
            <div className="winsDiv">
                <div className="winsHeader">
                    <p>Number of Wins: {this.props.wins}</p>
                </div>
                <div className="gif">
                    <img alt="celebrate" text="party time" src="https://media2.giphy.com/media/Hd3GXtH7xs1CU/200w.webp" />
                </div>
            </div>
        )
    }



};


export default WonGame;