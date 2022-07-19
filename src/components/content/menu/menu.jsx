import React from 'react'
import classNames from 'classnames';
import './menu.scss'

function Menu ({setMenuOpen,menuOpen}) {
    return(
        <>
    <div className={classNames('Menu', {'Menu-open': menuOpen,'': !menuOpen })}>
        <div className="Menu-container--right">

        </div>
    </div>
    </>
    );
}

export default Menu;