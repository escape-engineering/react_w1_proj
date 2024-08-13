export const sortCountries = (array) => {
    return array.sort((a, b) => {
        if (b.gold !== a.gold) return b.gold - a.gold;
        else if (b.silver !== a.silver) return b.silver - a.silver;
        return b.bronze - a.bronze;
    });
};
export function getRank(index, name) {
    switch (index) {
        case 0:
            return `🥇${name}`;
        case 1:
            return `🥈${name}`;
        case 2:
            return `🥉${name}`;
        default:
            return `${name}`;
    }
}
