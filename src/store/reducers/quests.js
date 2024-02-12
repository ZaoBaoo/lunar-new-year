import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPopupOpen: false,
  popupType: "",
};

export const slice = createSlice({
  name: "quests",
  initialState,
  reducers: {
    setIsPopupOpenAction: (state, { payload }) => {
      state.isPopupOpen = payload.value;
      state.popupType = payload.type;
    },
  },
});

const { actions, reducer } = slice;

export const { setIsPopupOpenAction } = actions;

export default reducer;
