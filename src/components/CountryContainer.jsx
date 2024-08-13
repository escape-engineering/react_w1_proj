import Title from "./container/Title.jsx";
import MedalListBox from "./container/MedalListBox.jsx";
import "./CountryContainer.css";
import Modal from "./container/Modal.jsx";
import InputForm from "./container/InputForm.jsx";
import useCountry from "../hooks/useCountry.jsx";

const CountryContainer = () => {
    const {
        modalRef,
        alertText,
        countries,
        form,
        formOnChangeHandler,
        formAddHandler,
        formUpdateHandler,
        formDeleteHandler,
    } = useCountry();

    return (
        <>
            <div className="wrapper">
                <Title />
                <InputForm
                    onChange={formOnChangeHandler}
                    addHandler={formAddHandler}
                    updateHandler={formUpdateHandler}
                    value={form}
                />
                {countries.length ? (
                    <MedalListBox onClick={formDeleteHandler} countries={countries} />
                ) : (
                    <p className="blankMedalList">아직 추가된 국가가 없습니다. 국가를 추가해주세요!</p>
                )}
            </div>
            <Modal elRef={modalRef} alertText={alertText} />
        </>
    );
};

export default CountryContainer;
