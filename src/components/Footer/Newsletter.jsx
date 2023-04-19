import React from "react";
import { useState } from "react";

import "./Newsletter.css";
import { SubHeading } from "../../components/index";
import ModalOverlay from "../../ds/Modal";

const Newsletter = () => {
    const [modalIsOpened, setModalIsOpened] = useState(false);

    return (
        <div className='app__newsletter'>
            <div className='app__newsletter-heading'>
                <SubHeading title='Newsletter' />
                <h1 className='headtext__cormorant'>
                    Subscribe to Our Newsletter
                </h1>
                <p className='p__opensans'>And never miss latest Updates!</p>
            </div>

            <div className='app__newsletter-input flex__center'>
                <input type='email' placeholder='Enter your email address' />
                <button
                    type='button'
                    className='custom__button'
                    onClick={() => setModalIsOpened(true)}
                >
                    Subscribe
                </button>
            </div>

            {modalIsOpened && (
                <ModalOverlay>
                    <div className='app__newsletter-modal section__padding'>
                        <p className='p__cormorant'>
                            We sent you an email. Check it, please. If you did
                            not get any email from us, let us know:
                        </p>
                        <p className='p__cormorant'>gericht@gericht.com</p>
                        <button
                            type='button'
                            className='custom__button'
                            onClick={() => setModalIsOpened(false)}
                        >
                            Close
                        </button>
                    </div>
                </ModalOverlay>
            )}
        </div>
    );
};

export default Newsletter;
