import React from 'react';
import PropTypes from 'prop-types';
import Delay from 'react-delay';
import categories from '../api/categories';
import {formatCategory} from '../helpers.js';


class CategoryPicker extends React.Component{


  static propTypes = {
    setCategory: PropTypes.func.isRequired,
    chosen: PropTypes.string
  }

 
  delay=0;

  getStyle = (key) => {
    const color = categories[key].color;
    this.delay += 250;
    if(Object.keys(categories).length%2===1 && key==='random_5'){
      return{ backgroundColor: color, animationDelay: this.delay,  gridColumn: 'span 2'};
    }
    
    return{ backgroundColor: color, animationDelay: this.delay }
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
      <div className="categories-wrapper">
        <div className="categories">
          {
            Object.keys(categories).map(key =>
             <Delay  wait={this.delay} key={key}>
               <button className={`${this.getClass(key)} animated bounceInDown`} key={key} style={this.getStyle(key)} onClick={()=>{this.props.setCategory(key)}}> {formatCategory(key)} </button>
             </Delay> 
            )
          }
        </div>
        <Delay wait={this.delay+200}><h3 className={(this.props.chosen!=='')?"hide":"show animated bounceIn"}> Choose a category</h3></Delay> 
      </div>
    );
  }
}

export default CategoryPicker;
