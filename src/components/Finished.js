import React from 'react';
import PropTypes from 'prop-types';

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
    }

    static propTypes = {
      category: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      newGame: PropTypes.func.isRequired
    }

  render(){
    return (
      <div className="finished">
        <h3> {this.props.score} </h3>
        <p> {(this.newHighscore) ? `Congratulations, new highscore!` : `Your highscore is ${this.previousHighscore } points. Better luck next time!`}</p>
        <button onClick={() => this.props.newGame()}> New Game</button>
      </div>
    );
  }
}

export default Finished;
