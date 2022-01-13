import * as actionTypes from './recipies-types';

export const addToFav = (recipeID) => {
    return{
        type: actionTypes.ADD_TO_FAV,
        payload: {
            id: recipeID
        }
    }
}

export const removeRecipe = (recipeID) => {
  return {
    type: actionTypes.REMOVE_RECIPE,
    payload: {
      id: recipeID,
    },
  };
};

export const addNewRecipe = (recipe) => {
  return {
    type: actionTypes.ADD_NEW_RECIPE,
    payload: recipe,
  };
};
