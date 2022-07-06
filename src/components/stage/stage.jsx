import React from 'react'
import './stage.scss'

function Stage () {
    return (
    <>
    <div className="stage">
        <div className="stage-container">
            <div className="stage-container--left">

            </div>
            <div className="stage-container--right">
                <div className="logo-container">

                </div>
                <button className="button-green">Neuste Musik</button>
                <button className="button-green-preselected">Über mich</button>
            </div>
        </div>
    </div>
    
    </>
    );
}

export default Stage