import Button from "../common/Button.jsx";
import "./MedalList.css";
import { sortCountries, getRank } from "../../utils.js";

const MedalList = ({ onClick, countries }) => {
    return (
        <>
            {countries.length
                ? sortCountries(countries).map(({ country, gold, silver, bronze }, idx) => {
                      return (
                          <tr key={country}>
                              <td>{getRank(idx, country)}</td>
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
