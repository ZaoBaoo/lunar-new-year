import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./reducers/popup";
import sceneReducer from "./reducers/scene";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    scene: sceneReducer,
  },
});

export default store;
