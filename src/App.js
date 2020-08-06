import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './components/Header';
import Recipes from './components/Recipes';

import {addRecipe, deleteRecipe, updateRecipe} from './redux/actions/RecipeActions';

function App() {
  const dispatch = useDispatch();
  const recipes = useSelector(({recipe}) => recipe.recipes);



  const addRecipeIn = (obj) => {
      dispatch(addRecipe(obj));
  }
  const deleteRecipeIn = (id) => {
    dispatch(deleteRecipe(id));
  }
  const updateRecipeIn = (id, obj) => {
    dispatch(updateRecipe(id, obj))
  }


  return (
    <div className="container">
      <Header addRecipeIn={addRecipeIn}/>

      <Recipes recipes={recipes} deleteRecipeIn={deleteRecipeIn} updateRecipeIn={updateRecipeIn} />

    </div>
  );
}

export default App;
