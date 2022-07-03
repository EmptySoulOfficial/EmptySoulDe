import React from 'react'
import './header.scss'

import Navigation from '../../components/navigation/navigation'
import Stage from '../../components/stage/stage'

function Header () {

    return(
<>
    <header className="header">
        <Navigation />
        <Stage />
    </header>

</>

    );
}

export default Header;