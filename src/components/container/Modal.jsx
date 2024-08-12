import Button from "../common/Button.jsx";
import "./Modal.css";

const Modal = ({ elRef, alertText }) => {
    const closeModal = () => {
        elRef.current.close();
    };

    return (
        <dialog ref={elRef} onClick={closeModal}>
            <div className="modalButtonWrap">
                <Button name="closeModalBtn">x</Button>
            </div>
            <p>{alertText}</p>
        </dialog>
    );
};

export default Modal;
