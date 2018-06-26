import React from 'react';
import CategoryPicker from './CategoryPicker.js';
import QuestionWrapper from './QuestionWrapper.js';


class Game extends React.Component{
  state ={
    category: '',
    score: 0
  };

  setCategory = (category) => {
    this.setState({category});
  }

  handleAnswer = (isCorrect) => {
      let score = this.state.score;
    if(isCorrect){
       score = this.state.score + 10;
    }
    else{
       score = this.state.score - 5;
    }
    this.setState({score});
  }

  newGame = () => {
    this.setState({
      category: '',
      score: 0
    })
  }

  render(){
    if (this.state.category === ''){
      return <CategoryPicker setCategory={this.setCategory}/>
    }
    else{
      return (
        <div>
          <p> Score: {this.state.score} </p>
          <QuestionWrapper category={this.state.category} handleAnswer={this.handleAnswer}  newGame={this.newGame}/>
        </div>
      )
    }
  }
}

export default Game;
