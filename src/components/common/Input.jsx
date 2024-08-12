import "./Input.css";

const Input = ({ type = "number", value, setValue, placeholder, id }) => {
    const inputHandler = (e) => {
        const { type, value } = e.target;
        type === "text" ? setValue(value) : setValue(Number(value));
    };

    return <input placeholder={placeholder} id={id} type={type} onChange={inputHandler} value={value} />;
};

export default Input;
