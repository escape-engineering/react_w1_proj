import React from "react";
import MedalList from "./MedalList.jsx";
import "./MedalListBox.css";

const MEDALLISTBOX_TH_LIST = ["국가명", "금메달", "은메달", "동메달", "액션"];

const MedalListBox = ({ onClick, countries }) => {
    // const tdArray = ["국가명", "금메달", "은메달", "동메달", "액션"];
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
