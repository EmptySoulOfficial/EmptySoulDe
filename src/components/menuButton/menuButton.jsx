import React from 'react'
import './menuButton.scss'
import classNames from 'classnames'

const MenuButton = ({setMenuOpen, menuOpen}) => {

    return (
        <>
            <div className="menuButton-container">
                <button  onClick={() => setMenuOpen(prev => !prev)}  className={classNames('menuButton', {'bmactive': menuOpen,'bmactive_re': !menuOpen })} id="menuButton" >
                    <span className={classNames('menuButton-bar menuButton-bar--color', {'menuButton-bar-open': menuOpen,'': !menuOpen })} ></span>
                    {/* <span className='menuButton-bar-active menuButton-bar-active--color' ></span> */}
                    <div className={classNames('menuButton-bar-active-1', {'menuButton-bar-open': menuOpen,'': !menuOpen })}></div>
                    <div className={classNames('menuButton-bar-active-2', {'menuButton-bar-open-2': menuOpen,'': !menuOpen })}></div>
                    <div className={classNames('menuButton-bar-active-3', {'menuButton-bar-open-3': menuOpen,'': !menuOpen })}></div>
                </button>
            </div>
        </>
    );
}

export default MenuButton;