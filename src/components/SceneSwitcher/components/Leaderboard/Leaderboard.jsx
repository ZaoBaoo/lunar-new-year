import "./Leaderboard.scss";
import { WrapperQuest } from "../../../WrapperQuest/WrapperQuest.jsx";
import { leaderboardDataList } from "../../../../urils/leaderboardDataList.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mergeObjectLeaderboard } from "../../../../urils/mergeObjectLeaderboard.js";
import { BrandBoard } from "./components/BrandBoard/BrandBoard.jsx";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { setActiveSceneAction } from "../../../../store/reducers/scene.js";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState(null);
  const { brands } = useSelector((state) => state.scene);

  const dispatch = useDispatch();

  const handleClose = () => {
    setTimeout(() => {
      dispatch(setActiveSceneAction({ type: "brands", activeBrand: null }));
    }, 500);
  };

  useEffect(() => {
    if (brands && leaderboardDataList) {
      const res = mergeObjectLeaderboard(leaderboardDataList, brands);

      setLeaderboardData(res);
    }
  }, [brands]);

  return (
    <div className="leaderboard">
      <WrapperQuest
        buttonText="К выбору брендов"
        handleAction={handleClose}
        bg="leaderboard"
        className="leaderboard__wrapper"
      >
        <h3 className="leaderboard__title">Турнирная таблица</h3>

        <div className="leaderboard__inner-brands-quests">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={30}
            className="mySwiper"
          >
            {leaderboardData &&
              Object.keys(leaderboardData).map((key) => (
                <SwiperSlide>
                  <BrandBoard
                    boardData={leaderboardData[key]}
                    brandName={key}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </WrapperQuest>
    </div>
  );
};

export { Leaderboard };
