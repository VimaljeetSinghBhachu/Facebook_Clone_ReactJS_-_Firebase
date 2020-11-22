import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_top">
                <h3>Sponsored</h3>
            </div>
            <iframe 
                title="Sponsored"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fharshography.in %2f&tabs=timeline&width=340&height=1500&small_header=false&addId"
                width="340"
                height="100%"
                style={{frameBorder: "none", overflow: "hidden"}}
                scrolling="no"
                frameborder="0"
                // allowTransparency="true"
                allow="encrypted-media"
            ></iframe>
        </div>
    ) 
}

export default Widgets
