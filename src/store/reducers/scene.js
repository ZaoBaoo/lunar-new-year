import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeScene: "brands",
  brands: {},
  activeBrand: "",
  activeQuest: "",
};

export const slice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    setActiveSceneAction: (state, { payload }) => {
      state.activeScene = payload.type;
      state.activeBrand = payload.activeBrand;
    },
    setBrandsAction: (state, { payload }) => {
      state.brands = payload;
    },
    setActiveQuestAction: (state, { payload }) => {
      state.activeQuest = payload;
    },
    handleCompleteAndInstallNextQuestAction: (state) => {
      const { brands, activeBrand, activeQuest } = state;
      const { event } = activeQuest;
      const currentBrand = brands[activeBrand];

      const indexNextQuest = currentBrand.quests.findIndex(
        (brand) => brand.event === event
      );

      console.log(
        JSON.parse(
          JSON.stringify(state.brands[activeBrand].quests[indexNextQuest])
        )
      );

      // currentBrand.quests.forEach((brand, index) => {
      //   if (brand.event === event) {
      //     brand.complete = true;
      //
      //     indexNextQuest = index + 1;
      //     // state.activeQuest = nextQuest;
      //     // state.activeScene = nextQuest.nameQuest;
      //   }
      // });

      // const nextQuest = currentBrand.quests[indexNextQuest];
      // state.activeQuest = nextQuest;
      // state.activeScene = nextQuest.nameQuest;
    },
  },
});

const { actions, reducer } = slice;

export const {
  setActiveSceneAction,
  setBrandsAction,
  setActiveQuestAction,
  handleCompleteAndInstallNextQuestAction,
} = actions;

export default reducer;
