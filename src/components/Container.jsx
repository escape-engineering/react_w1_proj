import React, { useEffect, useRef, useState } from "react";
import Title from "./container/Title.jsx";
import MedalListBox from "./container/MedalListBox.jsx";
import "./Container.css";
import MedalInputForm from "./container/MedalInputForm.jsx";
import Modal from "./container/Modal.jsx";
import useDidMountedEffect from "../hooks/useDidMountedEffect.jsx";

const Container = () => {
    const modalRef = useRef();

    const [total, setTotal] = useState([]);
    const [country, setCountry] = useState("");
    const [goldMedal, setGoldMedal] = useState(0);
    const [silverMedal, setSilverMedal] = useState(0);
    const [bronzeMedal, setBronzeMedal] = useState(0);
    const [alertText, setAlertText] = useState("");

    const medals = [
        { key: new Date().getTime() + 1, title: "금메달", value: goldMedal, setValue: setGoldMedal },
        { key: new Date().getTime() + 2, title: "은메달", value: silverMedal, setValue: setSilverMedal },
        { key: new Date().getTime() + 3, title: "동메달", value: bronzeMedal, setValue: setBronzeMedal },
    ];
    const sortCountries = (array) => {
        return array.sort((a, b) => {
            if (b.gold !== a.gold) return b.gold - a.gold;
            else if (b.silver !== a.silver) return b.silver - a.silver;
            return b.bronze - a.bronze;
        });
    };
    const setModal = (text) => {
        setAlertText(text);
        modalRef.current.showModal();
    };
    const setToInitial = () => {
        setCountry("");
        setGoldMedal(0);
        setSilverMedal(0);
        setBronzeMedal(0);
    };
    const check = (isupdating = false) => {
        const trimmedName = country.trim();
        if (!trimmedName) {
            setModal("국가명을 입력해주세요");
            return true;
        }
        const index = total.findIndex((el) => el.name === country);
        if (isupdating && index === -1) {
            setModal("등록되지 않은 국가입니다.");
            return true;
        }
        if (!isupdating && index !== -1) {
            setModal("이미 존재하는 국가입니다.");
            return true;
        }
    };
    const addHandler = (e) => {
        e.preventDefault();
        if (check()) return null;
        const id = new Date().getTime();
        const newCountry = {
            id: id,
            name: country,
            gold: goldMedal,
            silver: silverMedal,
            bronze: bronzeMedal,
        };
        setTotal(sortCountries([...total, newCountry]));
        setToInitial();
    };
    const updateHandler = (e) => {
        e.preventDefault();
        if (check(true)) return null;
        const copyTotal = [...total].map((el) => {
            return el.name === country ? { ...el, gold: goldMedal, silver: silverMedal, bronze: bronzeMedal } : el;
        });
        setTotal(sortCountries(copyTotal));
        setToInitial();
    };
    const deleteHandler = (e) => {
        const { id } = e.target;
        const newArray = [...total].filter((el) => el.id != id);
        setTotal(newArray);
    };

    useEffect(() => {
        const countries = JSON.parse(localStorage.getItem("countries"));
        setTotal(countries);
    }, []);
    const setLocalStorage = () => {
        localStorage.setItem("countries", JSON.stringify(total));
    };
    useDidMountedEffect(setLocalStorage, total);

    return (
        <>
            <div className="wrapper">
                <Title />
                <MedalInputForm
                    country={country}
                    setCountry={setCountry}
                    medals={medals}
                    addHandler={addHandler}
                    updateHandler={updateHandler}
                />
                {total.length ? (
                    <MedalListBox onClick={deleteHandler} total={total} />
                ) : (
                    <p className="blankMedalList">아직 추가된 국가가 없습니다. 국가를 추가해주세요!</p>
                )}
            </div>
            <Modal elRef={modalRef} alertText={alertText} />
        </>
    );
};

export default Container;
