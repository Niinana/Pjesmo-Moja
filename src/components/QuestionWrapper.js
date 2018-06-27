import React from 'react';
import QuestionHeader from './QuestionHeader'
import Question from './Question';
import Finished from './Finished';
import categories from '../api/categories';

class QuestionWrapper extends React.Component{

  constructor(props){

    super(props);

    this.categoryQuestions = [];
    if(this.props.category === 'all')
    {
       Object.keys(categories).map(key => this.categoryQuestions=[...this.categoryQuestions, ...categories[key].questions]);
    }
    else{
      this.categoryQuestions=categories[this.props.category].questions;
    }

    this.state = {
      current: 1,
      total: this.categoryQuestions.length,
      done: false,
      score: 0,
    }

    this.color=categories[this.props.category].color;

  }


  next = () => {
    if(this.state.current === this.state.total){
      this.setState({done: true});
    }
    else {
      const current = this.state.current + 1;
      this.setState({current});
    }
  }

  handleAnswer = (isCorrect) => {
    console.log(this);
    let score = this.state.score;
    if(isCorrect){
      score = score + 10;
    }
    else{
      score = score - 5;
    }
    this.setState({score});
  }

  newGame = () => {
    this.setState({
      score: 0
    });
    this.props.setCategory('');
  }


  render(){
    if(!this.state.done)
    {
      return (
        <div>
          <QuestionHeader newGame={this.newGame} current={this.state.current} total={this.state.total} color={this.color} score={this.state.score} category={this.props.category}/>
          <Question question={this.categoryQuestions[this.state.current - 1]} handleAnswer={this.handleAnswer} next={this.next}/>
        </div>
      );
    }
    else {
      return <Finished newGame={this.newGame} score={this.state.score}/>;
    }
  }
}

export default QuestionWrapper;
