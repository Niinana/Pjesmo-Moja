import React from 'react';
import categories from '../api/categories';
import {formatCategory} from '../helpers.js';

class CategoryPicker extends React.Component{

  getStyle = (key) => {
    const color = categories[key].color;
    return{ backgroundColor: color }
  }

  render(){
    console.log(formatCategory('a_b'));
    return (
      <React.Fragment>
        <h2> Choose a category:</h2>
        <div className="categories">
          {
            Object.keys(categories).map(key =>
              <button key={key} style={this.getStyle(key)} onClick={()=>{this.props.setCategory(key)}}> {formatCategory(key)} </button>
            )
          }
        </div>
      </React.Fragment>
    );
  }
}

export default CategoryPicker;
