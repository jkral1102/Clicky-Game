import React, { Component } from 'react';
// All components 
import FriendCard from "./Components/FriendCard";
import Header from "./Components/Header";
import WonGame from "./Components/WonGame";
// Data 
import friends from "./friends.json";
// Css 
import "./App.css";

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
    this.handleClick = this.handleClick.bind(this);
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
        <Header
          message={this.state.clickMessage}
          score={this.state.score}
          highscore={this.state.highscore}
          
        />

        {win}

        <div id="friendDiv">
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
    )
  }
}


export default App;

