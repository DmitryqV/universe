import { createSlice } from "@reduxjs/toolkit";

interface IModalSlice {
    show: boolean;
}


const initialState: IModalSlice =  {
    show: false,
};

export const SearchModalSlice = createSlice({
  name: "SearchModal",
  initialState,
  reducers: {
    SearchModalChangeShow: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const SearchModalReducer = SearchModalSlice.reducer;
export const SearchModalActions = SearchModalSlice.actions;
