import React from 'react';
import Question from './Question';
import questions from '../api/questions';

class QuestionWrapper extends React.Component{

  categoryQuestions = questions[this.props.category];

  state = {
    current: 1,
    total: this.categoryQuestions.length
  }

  next = () => {
    if(this.state.current === this.state.total){
      console.log('done');
    }
    else {
      const current = this.state.current + 1;
      this.setState({current});
    }
  }

  handleAnswer = (answered) => {
    const correct = this.categoryQuestions[this.state.current - 1].odgovor;
    console.log(correct);

    setTimeout(this.next, 1000);
  }

  render(){
    return (
      <div>
        {this.state.current}/{this.state.total}
        <Question q={this.categoryQuestions[this.state.current - 1]} handleAnswer = {this.handleAnswer}/>
      </div>
    );
  }
}

export default QuestionWrapper;
