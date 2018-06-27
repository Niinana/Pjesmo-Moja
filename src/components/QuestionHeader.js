import React from 'react';

class QuestionHeader extends React.Component{

  getStyle = (color) => {
    return{ backgroundColor: color, color: '#ffffff' }
  }

  render(){
    return (
      <div style={this.getStyle(this.props.color)}>
       <p>{this.props.current}/{this.props.total}</p>
       <p> Score: {this.props.score} </p>
       <h2>{this.props.category}</h2>
       <button onClick={this.props.newGame}>Quit</button>
      </div>
    );
  }
}

export default QuestionHeader;
