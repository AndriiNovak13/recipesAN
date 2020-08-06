import React from 'react';

import './Header.scss';
import Popup from '../Popup';

function Header({addRecipeIn}) {

    const [visiblePopup, setVisiblePopup] = React.useState(false);

    const togglePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

    return (
        <header className="header">
            <div className="header__box">
                <div className="header__title">
                    Book Recipe
                </div>
                <button className="header__btn"
                        onClick={togglePopup}
                >
                        Add Recipe
                </button>
            </div>

            {
                visiblePopup && <Popup closePopup={togglePopup} addRecipeIn={addRecipeIn} />
            }
            

        </header>
    )
}

export default Header;
