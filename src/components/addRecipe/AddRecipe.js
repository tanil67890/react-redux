import React from 'react'
import './addRecipe.css'
import { connect } from 'react-redux';
import { addNewRecipe } from '../../redux/recipies/recipies-actions';

const AddRecipe = (props) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const newRecipe = {
        id: event.target.elements.id.value,
        name: event.target.elements.type.value,
        category: event.target.elements.name.value,
        price: event.target.elements.description.value,
        procedure: event.target.elements.price.value,
        img: event.target.elements.img.value,
        ingredients: [
          event.target.elements.ingredient1.value,
          event.target.elements.ingredient2.value,
          event.target.elements.ingredient3.value,
          event.target.elements.ingredient4.value,
          event.target.elements.ingredient5.value,
          event.target.elements.ingredient6.value,
          event.target.elements.ingredient7.value,
        ],
    }
    props.onAddNewRecipe(newRecipe);
}
console.log(props);
    return (
      <div className="addRecipe-container">
        <div className="addNewRecipe">
          <p>Add a new Recipe to the list.</p>
        </div>
        <div onSubmit={handleSubmit} className="addRecipeForm">
          <form className="form">
            <label htmlFor="">Enter ID</label>
            <input name="id" placeholder="id" type="text" />
            <label htmlFor="">Enter Type</label>
            <input name="type" placeholder="type" type="text" />
            <label htmlFor="">Enter Name</label>
            <input name="name" placeholder="name" type="text" />
            <label htmlFor="">Enter Description</label>
            <input name="description" placeholder="description" type="text" />
            <label htmlFor="">Enter Price</label>
            <input name="price" placeholder="price" type="text" />
            <label htmlFor="">Enter Image URL</label>
            <input name="img" placeholder="image" type="text" />
            <label htmlFor="">Enter Ingredient-1</label>
            <input name="ingredient1" placeholder="ingredient1" type="text" />
            <label htmlFor="">Enter Ingredient-2</label>
            <input name="ingredient2" placeholder="ingredient2" type="text" />
            <label htmlFor="">Enter Ingredient-3</label>
            <input name="ingredient3" placeholder="ingredient3" type="text" />
            <label htmlFor="">Enter Ingredient-4</label>
            <input name="ingredient4" placeholder="ingredient4" type="text" />
            <label htmlFor="">Enter Ingredient-5</label>
            <input name="ingredient5" placeholder="ingredient5" type="text" />
            <label htmlFor="">Enter Ingredient-6</label>
            <input name="ingredient6" placeholder="ingredient6" type="text" />
            <label htmlFor="">Enter Ingredient-7</label>
            <input name="ingredient7" placeholder="ingredient7" type="text" />
            <button className="saveBtn">SAVE</button>
          </form>
        </div>
      </div>
    );
};



export default AddRecipe;
