import React from 'react';

import closeSvg from '../../assets/img/close.svg';
import Popup from '../Popup';

function Recipe({recipe, deleteRecipeNow, idRecipe, updateRecipeIn}) {
    const [visiblePopup, setVisiblePopup] = React.useState(false);

    const togglePopup = () => {
        setVisiblePopup(!visiblePopup)
    }


    return (
        <div className="recipe">
            <div className="recipe__title">
                {recipe.title}
            </div>
            <img src={closeSvg} alt="close" className="close" onClick={deleteRecipeNow} />
            <div className="recipe__text">
                {recipe.text}
            </div>
            <button className="edit"
                onClick={togglePopup}    
            >
                EDIT
            </button>

            {
                visiblePopup && 
                <Popup 
                    closePopup={togglePopup}
                    editIs
                    recipeFor={recipe}
                    idRecipe={idRecipe}
                    updateRecipeIn={updateRecipeIn}
                />
            }
            
        </div>
    )
}

export default Recipe;
