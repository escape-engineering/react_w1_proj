import Button from "../common/Button.jsx";
import "./MedalList.css";

const MedalList = ({ onClick, total }) => {
    function getrank(index, name) {
        switch (index) {
            case 0:
                return <td>🥇{name}</td>;
            case 1:
                return <td>🥈{name}</td>;
            case 2:
                return <td>🥉{name}</td>;
            default:
                return <td>{name}</td>;
        }
    }

    return (
        <>
            {total.length
                ? total.map(({ id, name, gold, silver, bronze }, idx) => {
                      return (
                          <tr key={id}>
                              {getrank(idx, name)}
                              <td>{gold}</td>
                              <td>{silver}</td>
                              <td>{bronze}</td>
                              <td>
                                  <Button name="deleteBtn" id={id} onClick={onClick}>
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
