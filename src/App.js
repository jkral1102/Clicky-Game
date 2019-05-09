import React, { Component } from 'react';
import FriendCard from "./Components/FriendCard";
import WonGame from "./Components/WonGame";
import friends from "./friends.json";
import "./App.css";
import Header from './header.png';

class App extends Component {
  constructor() { 

    super();

    this.state = {
      clickMessage: "Click an image to begin!",
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
        clickMessage: "Good click!"
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
          clickMessage: "You beat the game! Good job!",
          wins: this.state.wins + 1
        });

      }

    } else {
      // if id was found (previously clicked), reset game
      this.setState({
        clicked: [],
        score: 0,
        clickMessage: "You lose :("
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
          Current Score: {this.state.score} | Highest Score: {this.state.highscore}
          </div>
        <div id="friends">
       
          {this.state.friends.map(friend =>
            <FriendCard
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              handleClick={this.handleClick}
            />
          )}
           </div>
        </div>
        
      </div>
    )
  }
}


export default App;

