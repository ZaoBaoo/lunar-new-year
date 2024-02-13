import "./PopupScene.scss";

// Components
import { Button } from "../../../Button/Button";
import { setActiveSceneAction } from "../../../../store/reducers/scene";
import { useDispatch } from "react-redux";
import { ButtonClose } from "../../../ButtonClose/ButtonClose";
import { useEffect, useState } from "react";
import { brandsData } from "../../../../urils/brandsData";
import { Loader } from "../../../Loader/Loader";
import { parseDate } from "../../../../urils/parseDate";

const PopupScene = ({ activeBrand }) => {
  const [currentBrandData, setCurrentBrandData] = useState(null);
  const dispatch = useDispatch();

  const handleNextScene = () => {
    setTimeout(() => {
      dispatch(setActiveSceneAction({ type: "brands", activeBrand: null }));
    }, 500);
  };

  useEffect(() => {
    if (activeBrand) {
      setCurrentBrandData(brandsData[activeBrand]);
    }
  }, [activeBrand]);

  return (
    <div className="popupScene">
      <div className="popupScene__wrapper">
        <ButtonClose onClick={handleNextScene} />
        <div className="popupScene__content">
          {currentBrandData ? (
            <>
              <p className="popupScene__text">
                Уровень будет доступен{" "}
                {parseDate(currentBrandData.startDate).day} сентября
              </p>
              <div className="popupScene__image popupScene__image_xm" />
              <Button
                size="small"
                text="Назад"
                onClick={handleNextScene}
                className="popupScene__button"
              />
            </>
          ) : (
            <Loader className="popupScene__loader" />
          )}
        </div>
      </div>
    </div>
  );
};

export { PopupScene };
