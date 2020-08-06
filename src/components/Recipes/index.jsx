import React from 'react';

import './Recipes.scss'
import Recipe from './Recipe';


function Recipes({ recipes, deleteRecipeIn, updateRecipeIn }) {

    return (
        <div className="recipes__box">

            {
                recipes && recipes.map((recipe, index) =>(
                    <Recipe 
                        key={recipe.title+index}
                        recipe={recipe}
                        deleteRecipeNow={()=>deleteRecipeIn(index)}
                        idRecipe={index}
                        updateRecipeIn={updateRecipeIn}
                    />
                ))
            }

        </div>
    )
}

export default Recipes;
