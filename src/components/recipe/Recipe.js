import React from 'react'
import './recipe.css'
import { connect } from 'react-redux';
import { addToFav, removeRecipe } from '../../redux/recipies/recipies-actions';


const Recipe = (props) => {
 
    return (
      <div className="recipe">
        <div className="left-side">
          <img src={props.data.img} alt="" />
        </div>
        <div className="mid-side">
          <h1>{props.data.name}</h1>
          <p>{props.data.description}</p>
          <ul>
            {props.data.ingredients.map((ingredient) => {
              return <li>{ingredient}</li>;
            })}
          </ul>
          <button onClick={() => props.addToFav(props.data.id)}>
            + Add to favourites
          </button>
        </div>
        <div className="right-side">
          <button onClick={() => props.removeRecipe(props.data.id)}>X</button>
        </div>
      </div>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFav: (id) => dispatch(addToFav(id)),
    removeRecipe: (id) => dispatch(removeRecipe(id)),
  };
}

export default connect(null, mapDispatchToProps)(Recipe);
