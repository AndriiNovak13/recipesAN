import recipe from './RecipeReducers'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    recipe,
});

export default rootReducer;