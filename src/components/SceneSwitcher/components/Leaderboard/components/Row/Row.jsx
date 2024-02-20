import "./Row.scss";

const Row = ({ cal1, cal2, isActive }) => {
  return (
    <tr className="rowTable">
      <td className="rowTable__cell">{cal1}</td>
      <td className="rowTable__cell">{cal2 || "Скоро"}</td>
      <td className="rowTable__cell">
        <div
          className={`rowTable__status ${
            isActive ? "rowTable__status_active" : ""
          }`}
        />
      </td>
    </tr>
  );
};

export { Row };
