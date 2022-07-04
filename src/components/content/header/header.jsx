import React from 'react'
import './header.scss'

import Navigation from '../../navigation/navigation'
import Stage from '../../stage/stage'

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