import React from 'react';

class Finished extends React.Component{

  render(){
    return (
      <div>
        <p> {(this.props.score>0) ? `Congratulations, you scored: ${this.props.score} points!` : `You scored ${this.props.score} points. Better luck next time!`}</p>
        <button onClick={() => this.props.newGame()}> New Game</button>
      </div>
    );
  }
}

export default Finished;
