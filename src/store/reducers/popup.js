import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isPopupOpen: false,
  popupType: "",
};

export const slice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setIsPopupOpenAction: (state, { payload }) => {
      state.isPopupOpen = payload.value;
      state.popupType = payload.type;
    },
    // setPopupTypeAction: (state, action) => {
    //   state.popupType = action.payload;
    // },
  },
});

const { actions, reducer } = slice;

export const { setIsPopupOpenAction } = actions;

export default reducer;
