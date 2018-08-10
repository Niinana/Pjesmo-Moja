import React from 'react';
import CategoryPicker from './CategoryPicker.js';
import QuestionWrapper from './QuestionWrapper.js';


class Game extends React.Component{
  state ={
    category: '',
  };

  setCategory = (category) => {

    this.setState({category});
  }




  render(){

    return (
    <div className="game">
      {(this.state.category === '')?
        <img className="logo animated zoomIn" src={require('../images/logo.png')} alt="logo"/>
        :
        <React.Fragment/>
      }
  
      <CategoryPicker setCategory={this.setCategory} chosen={this.state.category}/>
      {(this.state.category !== '')?
          <div>
            <QuestionWrapper category={this.state.category} handleAnswer={this.handleAnswer}  newGame={this.newGame} setCategory={this.setCategory}/>
          </div>
        :
        <React.Fragment/>
      }
      
    </div>)
  }
}

export default Game;
