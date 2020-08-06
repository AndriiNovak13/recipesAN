 import actionTypes from '../actionTypes';

export const addRecipe = (recipe) => ({    
    type: actionTypes.ADD_RECIPE,
    payload: recipe
})

export const deleteRecipe = (id) => ({
    type: actionTypes.DELETE_RECIPE,
    payload: id
})

export const updateRecipe = (id, obj) => ({
    type: actionTypes.UPDATE_RECIPE,
    id,
    obj
})