import React from 'react';

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


    nextQuestion = () => {
      this.setState({...this.defaultClasses});
      this.props.next();
    }

    checkAnswer = (answered) => {
      const correct = this.props.question.odgovor;

      let updatedClasses = {...this.state};
      updatedClasses[correct] = 'correct';
      let score = this.state.score;
      if(correct === answered){
       this.props.handleAnswer(true);
      }
      else{
        this.props.handleAnswer(false);
        updatedClasses[answered] = 'wrong';
      }
      this.setState({...updatedClasses});
      setTimeout(this.nextQuestion, 500);
    }

  render(){
    return (
      <div>
       <p> {this.props.question.pitanje}</p>
        <button className={this.state.a} onClick={() => this.checkAnswer('a')}> {this.props.question.a} </button>
        <button className={this.state.b} onClick={() => this.checkAnswer('b')}> {this.props.question.b} </button>
        <button className={this.state.c} onClick={() => this.checkAnswer('c')}> {this.props.question.c} </button>
        <button className={this.state.d} onClick={() => this.checkAnswer('d')}> {this.props.question.d} </button>
      </div>
    );
  }
}

export default Question;
