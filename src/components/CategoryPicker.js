import React from 'react';

class CategoryPicker extends React.Component{


  render(){
    return (
      <div>
        <h2> Choose a category </h2>
        <button onClick={() => {this.props.setCategory('devedesete')}}> devedesete </button>
        <button onClick={() => {this.props.setCategory('sarajevo')}}> sarajevo </button>
      </div>
    );
  }
}

export default CategoryPicker;
