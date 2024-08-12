import React from "react";
import CountryInput from "./CountryInput";
import MedalInput from "./MedalInput";
import Button from "../common/Button";

const MedalInputForm = ({ country, setCountry, medals, addHandler, updateHandler }) => {
    return (
        <form className="inputGroup">
            <CountryInput value={country} setValue={setCountry} />
            <MedalInput medals={medals} />
            <div className="buttonGroup">
                <Button name="mainBtn" onClick={addHandler}>
                    국가 추가
                </Button>
                <Button name="mainBtn" onClick={updateHandler}>
                    업데이트
                </Button>
            </div>
        </form>
    );
};

export default MedalInputForm;
