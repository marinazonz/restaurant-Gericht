import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = (props) => {
    return <div className='app__backdrop' onClick={props.onClose} />;
};

const Modal = (props) => {
    return (
        <div className='app__modal'>
            <div className='app__modal-container'>{props.children}</div>
        </div>
    );
};

const forPortal = document.getElementById("overlay");

const ModalOverlay = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                forPortal
            )}
            {ReactDOM.createPortal(
                <Modal onClose={props.onClose}>{props.children}</Modal>,
                forPortal
            )}
        </>
    );
};

export default ModalOverlay;
