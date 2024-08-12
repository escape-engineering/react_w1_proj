import React from "react";
import Input from "../common/Input.jsx";

export const inputTitleStyle = {
    textAlign: "center",
};
export const inputBoxDiv = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
};

const CountryInput = ({ value, setValue }) => {
    return (
        <div style={inputBoxDiv}>
            <label htmlFor="countryInput" style={inputTitleStyle}>
                국가명
            </label>
            <Input placeholder="국가입력" id="countryInput" type="text" value={value} setValue={setValue} />
        </div>
    );
};

export default CountryInput;
