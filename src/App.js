import React, { Component } from 'react';
import Card from "./Components/Card";
import WonGame from "./Components/WonGame";
import friends from "./cards.json";
import "./App.css";

class App extends Component {
  constructor() {

    super();

    this.state = {
      message: "Click an image to begin!",
      highscore: 0,
      score: 0,
      clicked: [],
      friends: friends,
      wins: 0
    }
  }

  handleClick = (id) => {
    function shuffleArray(a) {
      var array = a;
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    shuffleArray(this.state.friends);

    var array = this.state.clicked;

    if (array.indexOf(id) === -1) {
      let newscore = this.state.score + 1
      // if id not found, push to array 
      this.setState({
        clicked: [...array, id],
        score: newscore,
        message: "Good click!"
      })

      // highscore update 
      if (newscore > this.state.highscore) {
        this.setState({
          highscore: newscore
        });
      };
      // If all friends clicked, reset game
      if (newscore === 12) { // or this.clicked.length === 12
        this.setState({
          clicked: [],
          score: 0,
          message: "You beat the game. Good job!",
          wins: this.state.wins + 1
        });
      }
    } else {
      // if id was found (previously clicked), reset game
      this.setState({
        clicked: [],
        score: 0,
        message: "You lose."
      });
    }
  }

  render() {

    let win = this.state.wins > 0 ? <WonGame wins={this.state.wins} /> : null

    return (
      <div id='App'>
        <div id='header'></div>
        <div id='wrapper'>
          {win}
          <div id='scores'>
            <span>Current Score: {this.state.score} | Highest Score: {this.state.highscore}</span>
            <span>{this.state.message}</span>
           
          </div>
          <div id="cards">
            {this.state.friends.map(friend =>
              <Card
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                handleClick={this.handleClick}
              />
            )}
          </div>
          <button onClick={() => {this.setState({ score: 0 })} }> Reset </button>
          
        </div>
        <div id='footer'>Memory Game | Jennifer Kral  | 2018</div>
      </div>
    )
  }
}


export default App;

