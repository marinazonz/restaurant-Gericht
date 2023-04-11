import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, info, price }) => {
    return (
        <div className='app__menuitem'>
            <div className='app__menuitem-container'>
                <p className='app__menuitem-title'>{title}</p>

                <div className='app__menuitem-devider' />

                <div className='app__menuitem-price'>
                    <p className='p__cormorant'>{price}</p>
                </div>
            </div>
            <div className='app__menuitem-info'>
                <p className='.p__opensans'>{info}</p>
            </div>
        </div>
    );
};

export default MenuItem;
