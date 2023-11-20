import { createSlice } from "@reduxjs/toolkit";

let initialState: any = {
  cardNameHolder: "",
  cardNumber: "0000 0000 0000 0000",
  mm: "00",
  yy: "00",
  cvc: "000",
};

let cardInfoSlicer = createSlice({
  name: "cardInfoDetails",
  initialState,
  reducers: {
    addCardName: (state, action) => {
      state.cardNameHolder = action.payload;
    },
    addCardNumber: (state, action) => {
      //   state.cardNumber = action.payload;
      let zero = "0";
      state.cardNumber =
        action.payload + zero.repeat(16 - action.payload.toString().length);
    },
    addMM: (state, action) => {
      //   state.mm = action.payload;
      let zero = "0";
      state.mm =
        action.payload + zero.repeat(2 - action.payload.toString().length);
    },
    addYY: (state, action) => {
      //   state.yy = action.payload;
      let zero = "0";
      state.yy =
        action.payload + zero.repeat(2 - action.payload.toString().length);
    },
    addCVC: (state, action) => {
      //   state.cvc = action.payload;
      let zero = "0";
      state.cvc =
        action.payload + zero.repeat(3 - action.payload.toString().length);
    },
  },
});

export let { addCVC, addCardName, addCardNumber, addMM, addYY } =
  cardInfoSlicer.actions;

export default cardInfoSlicer.reducer;
