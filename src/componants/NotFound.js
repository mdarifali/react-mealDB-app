import React from 'react';
import './NotFound.css';

const NotFound = () => {
    
    return (
        <div id='not-found'>
            <div class="text my-5">
                <h4>ERROR</h4>
                <h1>404</h1>
                <hr/>
                <h3>Page Not Found</h3>
            </div>
            <div class="astronaut">
                <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" class="src" />
            </div>
        </div>
    );
};

export default NotFound;