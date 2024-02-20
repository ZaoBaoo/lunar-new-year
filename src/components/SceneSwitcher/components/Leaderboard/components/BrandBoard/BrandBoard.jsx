import "./BrandBoard.scss";
import { Row } from "../Row/Row.jsx";
import { useEffect } from "react";

const BrandBoard = ({ boardData, brandName }) => {
  useEffect(() => {
    console.log(boardData);
  }, [boardData]);
  return (
    <div className="brandBoard">
      <img
        className={`brandBoard__logo brandBoard__logo_${brandName}`}
        src={`https://www.technodom.kz/under/lunar-new-year/board-logo-${brandName}.svg`}
        alt=""
      />
      <table className="brandBoard__table">
        <thead>
          <tr className="brandBoard__row">
            <th className="brandBoard__item-header">Приз</th>
            <th className="brandBoard__item-header">Участников</th>
            <th className="brandBoard__item-header">Участвую</th>
          </tr>
        </thead>
        <tbody>
          {boardData &&
            boardData.map((item) => (
              <Row
                key={item.id}
                cal1={item.title}
                cal2={item.member}
                isActive={item.complete}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export { BrandBoard };
