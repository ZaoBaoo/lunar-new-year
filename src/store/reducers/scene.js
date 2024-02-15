import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeScene: "brands",
  brands: {},
  activeBrand: "",
  activeQuest: "",
  popupParam: "",
};

export const slice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    setActiveSceneAction: (state, { payload }) => {
      state.activeScene = payload.type;
      state.activeBrand = payload.activeBrand;
    },
    setActivePopupAction: (state, { payload }) => {
      state.activeScene = payload.type;
      state.popupParam = payload.popupParam;
      state.activeBrand = payload.activeBrand;
    },
    setBrandsAction: (state, { payload }) => {
      state.brands = payload;
    },
    setActiveQuestAction: (state, { payload }) => {
      state.activeQuest = payload;
    },
    handleCompleteAndInstallNextQuestAction: (state, { payload }) => {
      const { copyObjectBrands, nextQuest, nextScene } = payload;

      state.brands = copyObjectBrands;
      state.activeQuest = nextQuest;
      state.activeScene = nextScene;
    },
  },
});

const { actions, reducer } = slice;

export const {
  setActiveSceneAction,
  setBrandsAction,
  setActiveQuestAction,
  setActivePopupAction,
  handleCompleteAndInstallNextQuestAction,
} = actions;

export default reducer;
