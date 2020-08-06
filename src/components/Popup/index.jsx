import React from 'react';

import './Popup.scss';
import closeSvg from '../../assets/img/close.svg';




function Popup({closePopup, editIs, addRecipeIn, recipeFor, idRecipe, updateRecipeIn}) {

    const [title, setTitle] = React.useState(editIs ? recipeFor.title : '');
    const [text, setText] = React.useState(editIs ? recipeFor.text : '');

    const  addingRecipe = () => {
        if(title && text){
            const obj ={
                title,
                text
            }
            addRecipeIn(obj);
            closePopup();
        }
        else{
            alert('Fill input')
        }
    }


    const updateRecipeInNow = () => {
        if(title && text){
            updateRecipeIn(idRecipe, {
                title,
                text
            });
            closePopup();
        }
        else{
            alert('Fill input')
        }
    }



    return (
        <div className="popup">
            <div className="popup__inner">

                <img 
                    src={closeSvg} 
                    alt="close"
                    onClick={closePopup}
                />

                <div className="popup__name">
                    <p>
                        Name recipe: 
                    </p>

                    <input type="text" value={title} onChange= { e => setTitle(e.target.value)} />

                </div>
                <div className="popup__text">
                    <p>
                        Recipe text: 
                    </p>

                    <textarea value={text} onChange= { e => setText(e.target.value)} ></textarea>

                </div>
                <button className="popup__btn" onClick={editIs? updateRecipeInNow:addingRecipe}>
                    {
                        editIs ? 'Edit now' : 'Add'
                    }
                </button>
            </div>
        </div>
    )
}

export default Popup
