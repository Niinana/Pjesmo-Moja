import React from 'react';

class Question extends React.Component{

  render(){
    return (
      <div>
        <p>{this.props.q.pitanje}</p>
        <button onClick={() => this.props.handleAnswer('a')}> {this.props.q.a} </button>
        <button onClick={() => this.props.handleAnswer('b')}> {this.props.q.b} </button>
        <button onClick={() => this.props.handleAnswer('c')}> {this.props.q.c} </button>
        <button onClick={() => this.props.handleAnswer('d')}> {this.props.q.d} </button>
      </div>
    );
  }
}

export default Question;
