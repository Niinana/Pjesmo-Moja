import React from 'react';

class Question extends React.Component{

  render(){
    return (
      <div>
        <p>{this.props.q.pitanje}</p>
        <button className={this.props.classes.a} onClick={() => this.props.checkAnswer('a')}> {this.props.q.a} </button>
        <button className={this.props.classes.b} onClick={() => this.props.checkAnswer('b')}> {this.props.q.b} </button>
        <button className={this.props.classes.c} onClick={() => this.props.checkAnswer('c')}> {this.props.q.c} </button>
        <button className={this.props.classes.d} onClick={() => this.props.checkAnswer('d')}> {this.props.q.d} </button>
      </div>
    );
  }
}

export default Question;
