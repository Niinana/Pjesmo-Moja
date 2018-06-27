import React from 'react';
import {formatCategory} from '../helpers.js';

class QuestionHeader extends React.Component{

  getStyle = (color) => {
    return{ backgroundColor: color, color: '#ffffff' }
  }

  render(){
    return (
      <div style={this.getStyle(this.props.color)}>
       <p>{this.props.current}/{this.props.total}</p>
       <p> Score: {this.props.score} </p>
       <p> highscore: {this.props.highscore} </p>
       <h2>{formatCategory(this.props.category)}</h2>
       <button onClick={this.props.newGame}>Quit</button>
      </div>
    );
  }
}

export default QuestionHeader;
