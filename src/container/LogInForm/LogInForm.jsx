import { useRef } from "react";

import "./LogInForm.css";

const LogInForm = ({ onCloseModal }) => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const submitFormHandler = (e) => {
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
    };

    return (
        <section className='app__LogInForm'>
            <h1>Login or Sign Up</h1>
            <form onSubmit={submitFormHandler} className='app__LogInForm-form'>
                <div className='app__LogInForm-form_email'>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' ref={emailInputRef} />
                </div>

                <div className='app__LogInForm-form_password'>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        ref={passwordInputRef}
                    />
                </div>

                <div className='app__LogInForm-form_submittion'>
                    <button type='button' className='custom__button'>
                        "Login" : "Create Account"
                    </button>
                </div>
            </form>
            <button
                type='button'
                className='custom__button'
                onClick={onCloseModal}
            >
                Close
            </button>
        </section>
    );
};

export default LogInForm;
