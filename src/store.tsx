import { configureStore } from "@reduxjs/toolkit";
//
import cardInfoSlicer from "./components/CardInfo/cardInfoSlicer";

let store = configureStore({
  reducer: {
    cardDetails: cardInfoSlicer,
  },
});

export default store;
