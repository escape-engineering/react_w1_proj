import React from "react";
import "./Button.css";

const Button = ({ name, id, children, onClick }) => {
    return (
        <button className={name} id={id} onClick={onClick}>
            {children}
        </button>
    );
};
export default Button;
