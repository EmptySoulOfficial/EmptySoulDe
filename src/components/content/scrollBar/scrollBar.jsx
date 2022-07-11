import React from "react";
import './scrollBar.scss'

function ScrollBar () {

    return(
<>
<div className="scrollBar">
    <div className="scrollBar-container">
        <input type="range" className="scrollBar-range"/>        
    </div>
</div>
</>


    );

}

export default ScrollBar;