import React from 'react'
import './stage.scss'

import Logo from '../../assets/graphics/logos/EmptySoul_Logo-Font.svg'

function Stage () {
    return (
    <>
    <div className="stage">
        {/* <img src="./media/backgrounds/wallpaper_demo.jpg" className="stage-wallpaper" alt="header wallpaper" /> */}
        {/* <video autoPlay muted loop id="myVideo" className="stage-wallpaper"> */}
            {/* <source src="./media/backgrounds/video_stock.webm" type="video/webm" /> */}
        {/* </video> */}
        <div className="stage-container">
            <div className="stage-container--left">
                <div className="stage-picture-container">
                    <div className="stage-picture-background">
                        <img src="./media/profile/me-test.png" className="stage-picture" alt="" />
                    </div>
                </div>
            </div>
            <div className="stage-container--right">
                <div className="stage-content">
                    	<div className="logo-container">
                    	    <img src={Logo} alt="Empty Soul Logo" className="EmptySoulLogoFont"/>
                    	</div>
                    	<div className="stage-text-container">
                    	<p>Electronic Metal Songwriter aus Deutschland.</p>
                    	<p>Blablablabl</p>
                    	</div>
                    	<div className="stage-buttons-container">
                    	    <button className="button-green stage-button-latestmusic">Neuste Musik</button>
                    	    <button className="button-green">Über mich</button>
                    	</div>
                </div>
            </div>
        </div>
    </div>
    
    </>
    );
}

export default Stage