import React from "react";
import MedalList from "./MedalList.jsx";
import "./MedalListBox.css";

const MedalListBox = ({ onClick, total }) => {
    const tdArray = ["국가명", "금메달", "은메달", "동메달", "액션"];
    return (
        <table>
            <thead>
                <tr>
                    {tdArray.map((el) => {
                        return <th key={el}>{el}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                <MedalList onClick={onClick} total={total} />
            </tbody>
        </table>
    );
};

export default MedalListBox;
