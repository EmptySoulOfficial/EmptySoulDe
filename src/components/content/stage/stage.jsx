import React from 'react'
import './stage.scss'

import Logo from '../../../assets/images/logos/EmptySoul_Logo-Font.svg'
import { getLang, getLangVarable } from '../../../assets/js/ELanguage/ELanguage.js'

function Stage () {

    const eLang = getLang()

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
                    <h1>Empty Soul</h1>
                    	<div className="logo-container">
                    	    <img src={Logo} alt="Empty Soul Logo" className="EmptySoulLogoFont"/>
                    	</div>
                    	<div className="stage-text-container">
                    	<p className="stage-text">{eLang.stage_text}</p>
                    	</div>
                    	<div className="stage-buttons-container">
                    	    <button className="button-green stage-button-latestmusic">{eLang.stage_button_music}</button>
                    	    <button className="button-green">{eLang.stage_button_aboutme}</button>
                    	</div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Stage