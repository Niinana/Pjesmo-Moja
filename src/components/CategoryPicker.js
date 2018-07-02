import React from 'react';
import PropTypes from 'prop-types';
import categories from '../api/categories';
import {formatCategory} from '../helpers.js';


class CategoryPicker extends React.Component{

  static propTypes = {
    setCategory: PropTypes.func.isRequired
  }

  getStyle = (key) => {
    const color = categories[key].color;
    return{ backgroundColor: color }
  }

  render(){
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
