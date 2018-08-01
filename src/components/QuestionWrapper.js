import React from 'react';
import PropTypes from 'prop-types';
import QuestionHeader from './QuestionHeader'
import Question from './Question';
import Finished from './Finished';
import categories from '../api/categories';
import {getRandom} from '../helpers.js';

class QuestionWrapper extends React.Component{

  constructor(props){

    super(props);
    this.categoryQuestions = [];
    if(this.props.category === 'random_20')
    {
       Object.keys(categories).map(key => this.categoryQuestions=[...this.categoryQuestions, ...categories[key].questions]);
       this.categoryQuestions = getRandom(this.categoryQuestions, 20);
    }
    else{
      this.categoryQuestions=categories[this.props.category].questions;
    }

    this.state = {
      current: 1,
      total: this.categoryQuestions.length,
      done: false,
      score: 0,
      highscore: localStorage.getItem(this.props.category) || 0
    }

    this.color=categories[this.props.category].color;

  }

  static propTypes = {
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired
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
          <QuestionHeader newGame={this.newGame} current={this.state.current} total={this.state.total} color={this.color} score={this.state.score} highscore={Number(this.state.highscore)} category={this.props.category}/>
          <Question current={this.state.current} question={this.categoryQuestions[this.state.current - 1]} handleAnswer={this.handleAnswer} next={this.next} color={this.color}/>
        </div>
      );
    }
    else {
      return <Finished newGame={this.newGame} score={this.state.score} category={this.props.category}/>;
    }
  }
}

export default QuestionWrapper;
