import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from 'prop-types';

class Question extends React.Component{

  constructor(props){
    super(props);

    this.defaultClasses = {
        a: '',
        b: '',
        c: '',
        d: ''
      };

      this.state={...this.defaultClasses};
  }

  static propTypes = {
    question: PropTypes.shape({
      a: PropTypes.string.isRequired,
      b: PropTypes.string.isRequired,
      c: PropTypes.string.isRequired,
      d: PropTypes.string.isRequired,
      odgovor: PropTypes.string.isRequired,
      pitanje: PropTypes.string.isRequired
    }),
    current: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    handleAnswer: PropTypes.func.isRequired,
    next:PropTypes.func.isRequired
  }


    nextQuestion = () => {
      this.setState({...this.defaultClasses});
      this.props.next();
    }

    checkAnswer = (answered) => {
      const correct = this.props.question.odgovor;

      let updatedClasses = {...this.state};
      updatedClasses[correct] = 'correct';
      if(correct === answered){
       this.props.handleAnswer(true);
      }
      else{
        this.props.handleAnswer(false);
        updatedClasses[answered] = 'wrong';
      }
      this.setState({...updatedClasses});
      setTimeout(this.nextQuestion, 400);
    }


  render(){
    return (
      <TransitionGroup component="div" className="question">
        <CSSTransition classNames="question" key={this.props.current} timeout={{enter: 800, exit:800}}>
      <div>
       <h3> {this.props.question.pitanje}</h3>
              <button className={this.state.a} onClick={() => this.checkAnswer('a')}> {this.props.question.a} </button>
              <button className={this.state.b} onClick={() => this.checkAnswer('b')}> {this.props.question.b} </button>
              <button className={this.state.c} onClick={() => this.checkAnswer('c')}> {this.props.question.c} </button>
              <button className={this.state.d} onClick={() => this.checkAnswer('d')}> {this.props.question.d} </button>
            </div>
          </CSSTransition>
        </TransitionGroup>

    );
  }
}

export default Question;
