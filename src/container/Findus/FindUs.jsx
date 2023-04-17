import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./FindUs.css";

const FindUs = () => {
    return (
        <div className='app__bg section__padding app__wrapper' id='contact'>
            <div className='app__wrapper_info app__findus-info'>
                <SubHeading title='Contact' />
                <h1 className='headtext__cormorant'>Find Us</h1>

                <div className='app__wrapper-content'>
                    <p className='p__opensans'>
                        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9
                        7SG
                    </p>
                    <h2 className='p__cormorant'>Opening hours</h2>
                    <p className='p__opensans'>
                        Mon - Fri: 10:00 am - 02:00 am
                    </p>
                    <p className='p__opensans'>
                        Sat - Sun: 10:00 am - 03:00 am
                    </p>
                </div>
                <button type='button' className='custom__button'>
                    Visit Us
                </button>
            </div>

            <div className='app__wrapper_img'>
                <img src={images.findus} alt='cocktail' />
            </div>
        </div>
    );
};

export default FindUs;
