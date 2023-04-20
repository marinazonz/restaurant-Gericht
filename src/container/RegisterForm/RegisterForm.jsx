import { useRef, useState, useContext } from "react";

import "./RegisterForm.css";
import { SubHeading } from "../../components";
import AppContext from "../../store/contex";

const RegisterForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const appCtx = useContext(AppContext);

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneInputRef = useRef();

    const submitFormHandler = (e) => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;

        //add some validation
        //add fetching info to the API

        setFormSubmitted(true);
    };

    const onCloseModalHandler = () => {
        appCtx.toggleModalforRegister();
    };

    const formForSubmit = (
        <form onSubmit={submitFormHandler} className='app__LogInForm-form'>
            <div className='app__LogInForm-form_name'>
                <input
                    type='text'
                    id='name'
                    ref={nameInputRef}
                    placeholder='Your Name'
                />
            </div>

            <div className='app__LogInForm-form_email'>
                <input
                    type='email'
                    id='email'
                    ref={emailInputRef}
                    placeholder='Your Email'
                />
            </div>

            <div className='app__LogInForm-form_phone'>
                <input
                    type='tel'
                    id='phone'
                    ref={phoneInputRef}
                    placeholder='Your Phone Number'
                />
            </div>

            <div className='app__LogInForm-form_buttons'>
                <button type='submit' className='custom__button'>
                    Sign In
                </button>
                <button
                    type='button'
                    className='custom__button'
                    onClick={onCloseModalHandler}
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
                onClick={onCloseModalHandler}
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
