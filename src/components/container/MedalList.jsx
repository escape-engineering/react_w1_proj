import Button from "../common/Button.jsx";
import "./MedalList.css";

const MedalList = ({ onClick, countries }) => {
    const sortCountries = (array) => {
        return array.sort((a, b) => {
            if (b.gold !== a.gold) return b.gold - a.gold;
            else if (b.silver !== a.silver) return b.silver - a.silver;
            return b.bronze - a.bronze;
        });
    };
    function getrank(index, name) {
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

    return (
        <>
            {countries.length
                ? sortCountries(countries).map(({ country, gold, silver, bronze }, idx) => {
                      return (
                          <tr key={country}>
                              <td>{getrank(idx, country)}</td>
                              <td>{gold}</td>
                              <td>{silver}</td>
                              <td>{bronze}</td>
                              <td>
                                  <Button name="deleteBtn" id={country} onClick={onClick}>
                                      삭제
                                  </Button>
                              </td>
                          </tr>
                      );
                  })
                : null}
        </>
    );
};

export default MedalList;
