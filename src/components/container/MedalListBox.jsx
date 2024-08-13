import React from "react";
import MedalList from "./MedalList.jsx";
import "./MedalListBox.css";
import { MEDALLISTBOX_TH_LIST } from "../../constant.jsx";

const MedalListBox = ({ onClick, countries }) => {
    return (
        <table>
            <thead>
                <tr>
                    {MEDALLISTBOX_TH_LIST.map((el) => {
                        return <th key={el}>{el}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                <MedalList onClick={onClick} countries={countries} />
            </tbody>
        </table>
    );
};

export default MedalListBox;
