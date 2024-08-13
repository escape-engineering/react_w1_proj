import Input from "../common/Input";
import style from "./InputFormItem.module.css";

const InputFormItem = ({ onChange, name, type, label, value }) => {
    return (
        <div className={style.inputBoxDiv}>
            <label htmlFor={name} className={style.inputTitleStyle}>
                {label}
            </label>
            <Input type={type} id={name} name={name} onChange={onChange} value={value[name]} />
        </div>
    );
};

export default InputFormItem;
