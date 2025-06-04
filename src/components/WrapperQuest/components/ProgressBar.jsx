import "./ProgressBar.scss";
import { useEffect, useState } from "react";
import { numberToArray } from "../../../urils/numberToArray.js";

const ProgressBar = ({ indexQuest, countQuest = 5 }) => {
  const [elementsBar, _] = useState(() => numberToArray(countQuest));

  return (
    <ul className="progressBar">
      {elementsBar &&
        indexQuest &&
        elementsBar.map((number) => (
          <li
            key={number}
            className={`progressBar__item ${
              number <= indexQuest ? "progressBar__item_active" : ""
            }`}
          />
        ))}
    </ul>
  );
};

export { ProgressBar };
