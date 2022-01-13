import { combineReducers } from "redux";
import recipiesReducer from './recipies/recipies-reducer';

const rootReducer = combineReducers({
  recipe: recipiesReducer,
});

export default rootReducer;