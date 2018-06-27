import React from 'react';
import CategoryPicker from './CategoryPicker.js';
import QuestionWrapper from './QuestionWrapper.js';


class Game extends React.Component{
  state ={
    category: ''
  };

  setCategory = (category) => {
    this.setState({category});
  }

  render(){
    if (this.state.category === ''){
      return <CategoryPicker setCategory={this.setCategory}/>
    }
    else{
      return (
        <div>
          <QuestionWrapper category={this.state.category} handleAnswer={this.handleAnswer}  newGame={this.newGame} setCategory={this.setCategory}/>
        </div>
      )
    }
  }
}

export default Game;
