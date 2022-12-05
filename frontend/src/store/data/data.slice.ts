import { createSlice } from "@reduxjs/toolkit";

export interface ICardData {
  title: string;
  author: string;
  views: string
}

interface ICardDataSlice {
  data: ICardData[],
}

const initialState: ICardDataSlice =  {
  data: [],
};

export const CardDataSlice = createSlice({
  name: "CardData",
  initialState,
  reducers: {
    changeCardData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const CardDataReducer = CardDataSlice.reducer;
export const CardDataActions = CardDataSlice.actions;
