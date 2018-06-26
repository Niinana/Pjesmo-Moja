import React from 'react';
import questions from '../api/questions';

class CategoryPicker extends React.Component{


  render(){
    return (
      <div>
        <h2> Choose a category </h2>
        {
          Object.keys(questions).map(key =>
            <button onClick={() => {this.props.setCategory(key)}}> {key} </button>
          )
        }
      </div>
    );
  }
}

export default CategoryPicker;
