import "./Announcement.scss";
import { parseDate } from "../../../../../../urils/parseDate.js";
import { Button } from "../../../../../Button/Button.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { brandsData } from "../../../../../../urils/brandsData.js";

const Announcement = ({ handleCloseScene }) => {
  const { activeBrand } = useSelector((state) => state.scene);
  const [currentBrandData, setCurrentBrandData] = useState(null);

  useEffect(() => {
    if (activeBrand) {
      setCurrentBrandData(brandsData[activeBrand]);
    }
  }, [activeBrand]);

  return (
    <div className="announcement">
      {currentBrandData && (
        <>
          <div className="announcement__content">
            <p className="announcement__text">
              {`Уровень будет доступен ${
                parseDate(currentBrandData.startDate).day
              } февраля`}
            </p>
            <div className="announcement__image announcement__image_xm" />
            <Button
              size="small"
              text="Назад"
              onClick={handleCloseScene}
              className="announcement__button"
            />
          </div>
        </>
      )}
    </div>
  );
};

export { Announcement };
