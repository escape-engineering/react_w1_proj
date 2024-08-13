import { FORM_LIST_INPUT } from "../../constant";
import Button from "../common/Button";
import InputFormItem from "./InputFormItem";
import style from "./InputForm.module.css";

const InputForm = ({ onChange, addHandler, updateHandler, value }) => {
    return (
        <form className={style.inputGroup}>
            {FORM_LIST_INPUT.map((item) => {
                return (
                    <InputFormItem
                        onChange={onChange}
                        name={item.name}
                        label={item.label}
                        type={item.type}
                        key={item.name}
                        value={value}
                        placeholder={item.placeholder}
                    />
                );
            })}
            <Button name="mainBtn" onClick={addHandler}>
                국가추가
            </Button>
            <Button name="mainBtn" onClick={updateHandler}>
                업데이트
            </Button>
        </form>
    );
};

export default InputForm;
