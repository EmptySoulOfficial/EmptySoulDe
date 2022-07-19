import React from 'react'
import classNames from 'classnames'
import './menuButton.scss'
import './utils/animation.scss'

const MenuButton = ({setMenuOpen, menuOpen}) => {

    return (
        <>
            <div className="menuButton-container">
                <button  onClick={() => setMenuOpen(prev => !prev)}  className={classNames('menuButton', {'bmactive': menuOpen,'bmactive_re': !menuOpen })} id="menuButton" >
                    {/* <span className='menuButton-bar-active menuButton-bar-active--color' ></span> */}
                    <span className={classNames('menuButton-bar menuButton-bar-top', {'menuButton-bar-open-top': menuOpen,'': !menuOpen })}></span>
                    <span className={classNames('menuButton-bar menuButton-bar-mid', {'menuButton-bar-open-mid': menuOpen,'': !menuOpen })}></span>
                    <span className={classNames('menuButton-bar menuButton-bar-bottom', {'menuButton-bar-open-bottom': menuOpen,'': !menuOpen })}></span>
                </button>
            </div>
        </>
    );
}

export default MenuButton;