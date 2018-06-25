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

  render(){
    if (this.state.category === ''){
      return <CategoryPicker setCategory={this.setCategory}/>
    }
    else{
      return <QuestionWrapper category={this.state.category}/>
    }
  }
}

export default Game;
