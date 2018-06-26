import React from 'react';

class Finished extends React.Component{

  render(){
    return (
      <div>
        <button onClick={() => this.props.newGame()}> New Game</button>
      </div>
    );
  }
}

export default Finished;
