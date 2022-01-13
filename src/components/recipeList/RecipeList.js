import React from 'react'
import './recipeList.css'
import Recipe from '../recipe/Recipe';
import { connect } from 'react-redux';


const RecipeList = (props) => {
 
    return (
      <div className="recipe-container">
        <a href="/addRecipe">
          <button className="addRecipe">+ Add Recipe</button>
        </a>
        {props.foodItems.map((foodItem) => {
          return <Recipe key={foodItem.id} data={foodItem} />;
        })}
        <div className="favFoodItems">
          <h2>Your favourite Donuts: </h2>
          
            {props.favFoodItems.map((favFood) => {
              return (
                <div className="favItems">
                  <div className="wrap">
                    <img src={favFood.img} alt="" />
                    <h2>{favFood.name}</h2>
                  </div>
                </div>
              );
            })}
          
        </div>
      </div>
    );
};

const mapStateToProps = state => {
  return {
    foodItems: state.recipe.foodItems,
    favFoodItems: state.recipe.favFoodItems,
  };
};



export default connect(mapStateToProps)(RecipeList); 
