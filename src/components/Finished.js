import React from 'react';

class Finished extends React.Component{

previousHighscore = localStorage.getItem(this.props.category);
newHighscore = false;

    constructor(props){
          super(props);
      if(  this.previousHighscore && this.props.score < this.previousHighscore){
        return
      }
      localStorage.setItem(this.props.category, this.props.score);
      this.newHighscore = true;
      console.log(this.newHighscore);
    }

  render(){
    return (
      <div>
        <h3> {this.props.score} </h3>
        <p> {(this.newHighscore) ? `Congratulations, new highscore!` : `Your highscore is ${this.previousHighscore } points. Better luck next time!`}</p>
        <button onClick={() => this.props.newGame()}> New Game</button>
      </div>
    );
  }
}

export default Finished;
