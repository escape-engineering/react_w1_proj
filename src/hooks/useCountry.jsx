import { useState, useEffect, useRef } from "react";
import useDidMountedEffect from "./useDidMountedEffect";
import { INITIAL_STATE } from "../constant";

const useCountry = () => {
    const modalRef = useRef();
    const [alertText, setAlertText] = useState("");
    const [countries, setCountries] = useState([]);
    const [form, setForm] = useState(INITIAL_STATE);

    const setModal = (text) => {
        setAlertText(text);
        modalRef.current.showModal();
    };

    const formCheck = (isupdating = false) => {
        const trimmedName = form.country.trim();
        if (!trimmedName) {
            setModal("국가명을 입력해주세요");
            return true;
        }
        if (form.gold < 0 || form.silver < 0 || form.bronze < 0) {
            setModal("메달수는 0이상만 입력가능합니다.");
            return true;
        }
        const index = countries.findIndex((el) => el.country === form.country);
        if (isupdating && index === -1) {
            setModal("등록되지 않은 국가입니다.");
            return true;
        }
        if (!isupdating && index !== -1) {
            setModal("이미 존재하는 국가입니다.");
            return true;
        }
    };

    const formOnChangeHandler = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const formAddHandler = (e) => {
        e.preventDefault();
        if (formCheck()) return null;
        setCountries([...countries, { ...form }]);
        console.log("countries Add ", countries);
    };
    const formUpdateHandler = (e) => {
        e.preventDefault();
        if (formCheck(true)) return null;
        let newArray = [...countries].map((item) => {
            return item.country === form.country ? form : item;
        });
        setCountries(newArray);
    };
    const formDeleteHandler = (e) => {
        const { id } = e.target;
        const newArray = [...countries].filter((el) => el.country != id);
        setCountries(newArray);
    };

    useEffect(() => {
        if (localStorage.getItem("countries")) {
            const localCountries = JSON.parse(localStorage.getItem("countries"));
            setCountries(localCountries);
        }
    }, []);
    const setLocalStorage = () => {
        localStorage.setItem("countries", JSON.stringify(countries));
    };
    useDidMountedEffect(setLocalStorage, countries);

    return {
        modalRef,
        alertText,
        setAlertText,
        countries,
        setCountries,
        form,
        setForm,
        setModal,
        formCheck,
        formOnChangeHandler,
        formAddHandler,
        formUpdateHandler,
        formDeleteHandler,
    };
};

export default useCountry;
