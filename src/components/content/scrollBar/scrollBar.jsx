import React from "react";
import './scrollBar.scss'

function ScrollBar () {

    return(
<>
<div className="scrollBar">
    <div className="scrollBar-container">
        <input type="range" className="slider" min="0" max="100" step="1" orient="vertical"/>        
    </div>
</div>
</>


    );

}

export default ScrollBar;