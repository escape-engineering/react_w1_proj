import React from "react";
import Input from "../common/Input.jsx";
import { inputTitleStyle } from "./CountryInput.jsx";
import { inputBoxDiv } from "./CountryInput.jsx";

const MedalInput = ({ medals }) => {
    return (
        <>
            {medals.map(({ key, title, value, setValue }) => {
                return (
                    <div style={inputBoxDiv} key={key}>
                        <label htmlFor={key} style={inputTitleStyle}>
                            {title}
                        </label>
                        <Input id={key} type="number" value={value} setValue={setValue} />
                    </div>
                );
            })}
        </>
    );
};

export default MedalInput;
