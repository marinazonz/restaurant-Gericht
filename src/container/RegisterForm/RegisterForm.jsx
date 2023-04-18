import { useRef, useState } from "react";

import "./RegisterForm.css";
import { SubHeading } from "../../components";

const RegisterForm = ({ onCloseModal }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const submitFormHandler = (e) => {
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        //add some validation
        //add fetching info to the API

        setFormSubmitted(true);
    };

    const formForSubmit = (
        <form onSubmit={submitFormHandler} className='app__LogInForm-form'>
            <div className='app__LogInForm-form_email'>
                <input
                    type='email'
                    id='email'
                    ref={emailInputRef}
                    placeholder='Your Email'
                />
            </div>

            <div className='app__LogInForm-form_password'>
                <input
                    type='password'
                    id='password'
                    ref={passwordInputRef}
                    placeholder='Your Password'
                />
            </div>

            <div className='app__LogInForm-form_buttons'>
                <button type='submit' className='custom__button'>
                    Sign In
                </button>
                <button
                    type='button'
                    className='custom__button'
                    onClick={onCloseModal}
                >
                    Close
                </button>
            </div>
        </form>
    );

    const formISSubmitted = (
        <div className='app__formSubmitted'>
            <p className='p__cormorant'>
                You have been successfully registered in our sistem!
            </p>
            <button
                type='button'
                className='custom__button'
                onClick={onCloseModal}
            >
                Close
            </button>
        </div>
    );

    return (
        <section className='app__LogInForm'>
            <SubHeading title='Registration Form' />

            {!formSubmitted ? formForSubmit : formISSubmitted}
        </section>
    );
};

export default RegisterForm;
