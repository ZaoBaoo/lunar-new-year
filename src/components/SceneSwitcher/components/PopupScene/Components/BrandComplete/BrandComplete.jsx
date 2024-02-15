import "./BrandComplete.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { brandsData } from "../../../../../../urils/brandsData.js";
import { Button } from "../../../../../Button/Button.jsx";

const BrandComplete = ({ handleCloseScene }) => {
  const [currentBrandData, setCurrentBrandData] = useState(null);
  const { activeBrand } = useSelector((state) => state.scene);

  useEffect(() => {
    if (activeBrand) {
      setCurrentBrandData(brandsData[activeBrand]);
    }
  }, [activeBrand]);

  return (
    <div className="brandComplete">
      {currentBrandData && (
        <div className="brandComplete__content">
          <div className="brandComplete__header">
            <p className="brandComplete__title">Уровень</p>
            <img
              className="brandComplete__image"
              src={currentBrandData?.image}
              alt=""
            />
            <p className="brandComplete__title brandComplete__title_margin">
              уже пройден
            </p>
            <p className="brandComplete__text">
              Зачем тебе он, когда ты можешь пройти новый?
            </p>
          </div>
          <Button
            onClick={handleCloseScene}
            className="brandComplete__button"
            text="К выбору брендов"
            size="small"
          />
        </div>
      )}
    </div>
  );
};

export { BrandComplete };
