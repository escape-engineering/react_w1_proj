export const INITIAL_STATE = {
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
};

export const FORM_LIST_INPUT = [
    {
        type: "text",
        name: "country",
        label: "국가",
        placeholder: "국가명을 입력하세요",
    },
    {
        type: "number",
        name: "gold",
        label: "금메달",
    },
    {
        type: "number",
        name: "silver",
        label: "은메달",
    },
    {
        type: "number",
        name: "bronze",
        label: "동메달",
    },
];

export const MEDALLISTBOX_TH_LIST = ["국가명", "금메달", "은메달", "동메달", "액션"];
