import React from 'react';
import PropTypes from 'prop-types';

class QuestionHeader extends React.Component{


  static propTypes = {
    category: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    highscore: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    newGame: PropTypes.func.isRequired
  }

  render(){
    return (
          <div className="question-header">
          <p className="current">{this.props.current}/{this.props.total}</p>
          <p className="score"> Score: {this.props.score} </p>
          <p className="highscore"> highscore: {this.props.highscore} </p>
          <h2 className="category"></h2>
          <button className="quit" onClick={this.props.newGame}>Quit</button>
          </div>
    );
  }
}

export default QuestionHeader;
