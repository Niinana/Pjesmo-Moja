import React from 'react';
import PropTypes from 'prop-types';
import categories from '../api/categories';
import {formatCategory} from '../helpers.js';


class CategoryPicker extends React.Component{

  static propTypes = {
    setCategory: PropTypes.func.isRequired,
    chosen: PropTypes.string
  }

  getStyle = (key) => {
    const color = categories[key].color;
    return{ backgroundColor: color }
  }

  getClass = (key) => {
    if (this.props.chosen===''){
      return "show";
    }
    else if(key===this.props.chosen){
      return "active";
    }
    else return "hide";
  }

  render(){
    return (
      <div className="picker">
        <h2 className={(this.props.chosen!=='')?"hide":"show"}> Choose a category:</h2>
        <div className="categories">
          {
            Object.keys(categories).map(key =>
              <button className={this.getClass(key)} key={key} style={this.getStyle(key)} onClick={()=>{this.props.setCategory(key)}}> {formatCategory(key)} </button>
            )
          }
        </div>
      </div>
    );
  }
}

export default CategoryPicker;
