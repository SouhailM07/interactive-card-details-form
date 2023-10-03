import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cardNameHolder: "",
  cardNumber: "",
  mm: "",
  yy: "",
  cvc: "",
};

let cardInfoSlicer = createSlice({
  name: "cardInfoDetails",
  initialState,
  reducers: {
    addCardName: (state, action) => {
      state.cardNameHolder = action.payload;
    },
    addCardNumber: (state, action) => {
      state.cardNumber = action.payload;
    },
    addMM: (state, action) => {
      state.mm = action.payload;
    },
    addYY: (state, action) => {
      state.yy = action.payload;
    },
    addCVC: (state, action) => {
      state.cvc = action.payload;
    },
  },
});

export let { addCVC, addCardName, addCardNumber, addMM, addYY } =
  cardInfoSlicer.actions;

export default cardInfoSlicer.reducer;
