import "./PopupScene.scss";

// Components
import { setActiveSceneAction } from "../../../../store/reducers/scene";
import { useDispatch, useSelector } from "react-redux";
import { ButtonClose } from "../../../ButtonClose/ButtonClose";
import { Announcement } from "./Components/Announcement/Announcement.jsx";
import { BrandComplete } from "./Components/BrandComplete/BrandComplete.jsx";

const popupComponents = {
  announcement: Announcement,
  brandComplete: BrandComplete,
};

const PopupScene = () => {
  const { popupParam } = useSelector((state) => state.scene);
  const dispatch = useDispatch();

  const PopupContent = popupComponents[popupParam];

  const handleCloseScene = () => {
    setTimeout(() => {
      dispatch(setActiveSceneAction({ type: "brands", activeBrand: null }));
    }, 500);
  };

  return (
    <div className="popupScene">
      <div className="popupScene__wrapper">
        <ButtonClose onClick={handleCloseScene} />
        <PopupContent handleCloseScene={handleCloseScene} />
      </div>
    </div>
  );
};

export { PopupScene };
