import './App.css';
import RecipeList from './components/recipeList/RecipeList';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import AddRecipe from './components/addRecipe/AddRecipe';
import { connect } from 'react-redux';
import { addNewRecipe } from './redux/recipies/recipies-actions';
import { useNavigate } from 'react-router';


function App (props)  {
  const navigate = useNavigate();
  console.log(props);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<RecipeList />} />
        <Route path="/addRecipe" element={<AddRecipe data={props.foodItems} onAddNewRecipe={(newRecipe) => {
          props.addNewRecipe(newRecipe);
          navigate('/');
        }} />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    foodItems: state.recipe.foodItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewRecipe: (id) => dispatch(addNewRecipe(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
