import React, { useContext } from "react";

import "./AboutUs.css";
import { images } from "../../constants";
import AppContext from "../../store/contex";

const AboutUs = () => {
    const appCtx = useContext(AppContext);

    const openPageHandler = () => {
        appCtx.toOpenPage();
    };
    return (
        <div
            className='app__aboutUs section__padding app__bg flex__center'
            id='about'
        >
            <div className='app__aboutUs-overlay flex__center'>
                <img src={images.G} alt='G' />
            </div>

            <div className='app__aboutUs-content flex__center'>
                <div className='app__aboutUs-content_about flex__center'>
                    <h1 className='headtext__cormorant'>About Us</h1>
                    <img
                        src={images.spoon}
                        alt='spoon'
                        className='spoon__image'
                    />
                    <p className='p__opensans'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quis pharetra adipiscing ultrices vulputate posuere
                        tristique. In sed odio nec aliquet eu proin mauris et.
                    </p>
                    <button
                        type='button'
                        className='custom__button'
                        onClick={openPageHandler}
                    >
                        Know More
                    </button>
                </div>

                <div className='app__aboutUs-content_knife flex__center'>
                    <img src={images.knife} alt='knife' />
                </div>

                <div className='app__aboutUs-content_history flex__center'>
                    <h1 className='headtext__cormorant'>Our History</h1>
                    <img
                        src={images.spoon}
                        alt='spoon'
                        className='spoon__image'
                    />
                    <p className='p__opensans'>
                        Adipiscing tempus ullamcorper lobortis odio tellus arcu
                        volutpat. Risus placerat morbi volutpat habitasse
                        interdum mi aliquam In sed odio nec aliquet.
                    </p>
                    <button
                        type='button'
                        className='custom__button'
                        onClick={openPageHandler}
                    >
                        Know More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
