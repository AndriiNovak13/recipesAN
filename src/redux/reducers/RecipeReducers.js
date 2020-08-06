import actionTypes from '../actionTypes';

const initialState = {
    recipes: []
}


const recipe = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_RECIPE: {
            const recipes = [...state.recipes];
            recipes.push(action.payload);
            localStorage.setItem("recipes", JSON.stringify(recipes));

            return {
                ...state,
                recipes
            }

        }
        case actionTypes.DELETE_RECIPE: {
            const newRecipes = state.recipes.filter((item, index) => {
                if(index !== action.payload) {
                    return item;
                }
            } )
            return {
                ...state,
                recipes: newRecipes
            }
        }

        case actionTypes.UPDATE_RECIPE: {
            const newRecipes = [...state.recipes];
            newRecipes[action.id] = action.obj
            return {
                ...state,
                recipes: newRecipes
            }
        }

        default: return state
    }
}

export default recipe;