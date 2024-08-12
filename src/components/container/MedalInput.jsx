import React from "react";
import Input from "../common/Input";
import { inputTitleStyle } from "./CountryInput";
import { inputBoxDiv } from "./CountryInput";

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
