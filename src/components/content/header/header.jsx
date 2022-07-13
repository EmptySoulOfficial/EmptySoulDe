import React, { useState } from 'react';
import './header.scss'

import Navigation from '../../navigation/navigation'
import Stage from '../stage/stage'


function Header () {

    const [menuOpen, setMenuOpen] = useState(false);

    return(
<>
    <header className="header">
        <Navigation setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <Stage />
    </header>

</>

    );
}

export default Header;