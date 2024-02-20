import "./CommercialQuest.scss";
import { WrapperQuest } from "../../../WrapperQuest/WrapperQuest.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSceneAction } from "../../../../store/reducers/scene.js";
import { useEffect } from "react";

const CommercialQuest = ({ activeBrand }) => {
  const { brands, activeQuest } = useSelector((state) => state.scene);

  const dispatch = useDispatch();

  const handelSceneBrands = () => {
    setTimeout(() => {
      dispatch(
        setActiveSceneAction({
          type: "brands",
          activeBrand: null,
        })
      );
    }, 500);
  };

  useEffect(() => {
    if (activeQuest) {
      console.log(activeQuest);
    }
  }, [activeQuest]);

  return (
    <div className="commercialQuest">
      <WrapperQuest indexQuest={5} isButtonDisabled>
        <section className="commercialQuest__content">
          <div className="commercialQuest__top">
            <h2 className="commercialQuest__title">
              {activeQuest?.endContent?.title}
            </h2>
            <img
              className={`commercialQuest__image commercialQuest__image_${activeBrand}`}
              src={activeQuest?.image}
              alt=""
            />
            <p className="commercialQuest__text">
              {activeQuest?.endContent?.text}
            </p>
          </div>
          <div className="commercialQuest__bottom">
            <a
              className="commercialQuest__link"
              href={brands[activeBrand]?.linkProducts}
            >
              К покупкам
            </a>
            <button
              className="commercialQuest__button"
              onClick={handelSceneBrands}
            >
              Назад к выбору бренда
            </button>
          </div>
        </section>
      </WrapperQuest>
    </div>
  );
};

export { CommercialQuest };
