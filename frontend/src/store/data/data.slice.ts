import { createSlice } from "@reduxjs/toolkit";

enum CardType {
  "broadcast",
  "post"
}

export interface ICardData {
  title: string;
  author: string;
  views: string;
  type: CardType;
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
