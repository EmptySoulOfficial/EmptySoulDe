import React from 'react'
import './navigation.scss'
import MenuButton from '../menuButton/menuButton.jsx'
import Icon from '../../assets/js/Icon/Icon.jsx'

const Navigation = ({setMenuOpen,menuOpen}) => {

    return (
        <>
        <nav className="navigation">
            <div className="navigation-container">
                <div className="navigation-container--left">
                    <button className="navigation-buttons navigation-buttons-headphones"><Icon name="headphones" color="var(--white)" size={20} /></button>
                    <button className="navigation-buttons--disabled"><Icon name="play" color="var(--white)" size={20} /></button>
                </div>
                <div className="navigation-container--right">
                    <MenuButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navigation;
