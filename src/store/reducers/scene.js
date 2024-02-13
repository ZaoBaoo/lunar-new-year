import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeScene: "quizQuestions",
  param: null,
};

export const slice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    setActiveSceneAction: (state, { payload }) => {
      state.activeScene = payload.type;
      state.param = payload.param;
    },
  },
});

const { actions, reducer } = slice;

export const { setActiveSceneAction } = actions;

export default reducer;
