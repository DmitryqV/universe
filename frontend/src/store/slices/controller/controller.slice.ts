import { createSlice } from "@reduxjs/toolkit";

enum LayoutsList {
  Posts = "posts",
  Broadcast = "broadcast",
}

interface IControllerSlice {
  transform: number;
  currentLayout: LayoutsList;
}

const initialState: IControllerSlice =  {
  transform: 0,
  currentLayout: LayoutsList.Posts,
};

export const ContentControllerSlice = createSlice({
  name: "ContentController",
  initialState,
  reducers: {
    changeTransform: (state, action) => {
      state.transform = action.payload;
    },
    changeLayout: (state, action) => {
      state.currentLayout = action.payload;
    },
  },
});

export const ContentControllerReducer = ContentControllerSlice.reducer;
export const ContentControllerActions = ContentControllerSlice.actions;
