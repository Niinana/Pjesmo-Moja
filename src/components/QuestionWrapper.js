import React from 'react';
import Question from './Question';
import Finished from './Finished';
import questions from '../api/questions';

class QuestionWrapper extends React.Component{

  categoryQuestions = questions[this.props.category];

  state = {
    current: 1,
    total: this.categoryQuestions.length,
    done: false,
    classes: {
      a: '',
      b: '',
      c: '',
      d: ''
    }
  }

  next = () => {
    this.setState({
      classes: {
          a: '',
          b: '',
          c: '',
          d: ''
        }
    })
    if(this.state.current === this.state.total){
      this.setState({done: true});
    }
    else {
      const current = this.state.current + 1;
      this.setState({current});
    }
  }

  checkAnswer = (answered) => {
    const correct = this.categoryQuestions[this.state.current - 1].odgovor;
    this.state.classes[correct] = 'correct';
    if(correct === answered){
      this.props.handleAnswer(true);
    }
    else{
      this.state.classes[answered] = 'wrong';
      this.props.handleAnswer(false);
    }
    setTimeout(this.next, 700);
  }

  render(){
    if(!this.state.done)
    {
      return (
        <div>
          {this.state.current}/{this.state.total}
          <Question q={this.categoryQuestions[this.state.current - 1]} checkAnswer={this.checkAnswer} classes={this.state.classes}/>
        </div>
      );
    }
    else {
      return <Finished newGame={this.props.newGame}/>;
    }
  }
}

export default QuestionWrapper;
