import "./Input.css";

const Input = ({ type, id, name, onChange, ...rest }) => {
    return <input type={type} id={id} name={name} onChange={onChange} {...rest} />;
};

export default Input;
