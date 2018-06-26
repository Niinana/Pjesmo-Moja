import React from 'react';
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
      classes: {
        a: '',
        b: '',
        c: '',
        d: ''
      }
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
    let updatedClasses = {...this.state.classes};
    updatedClasses[correct] = 'correct';
    this.setState({classes: updatedClasses});
    if(correct === answered){
      this.props.handleAnswer(true);
    }
    else{
      updatedClasses[answered] = 'wrong';
      this.props.handleAnswer(false);
    }
    setTimeout(this.next, 500);
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
