import React from 'react';

class Finished extends React.Component{

  render(){
    return (
      <div>
        <p>Congratulations, you scored: {this.props.score} points! </p> 
        <button onClick={() => this.props.newGame()}> New Game</button>
      </div>
    );
  }
}

export default Finished;
