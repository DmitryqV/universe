import { createSlice } from "@reduxjs/toolkit";

interface IPopupSlice {
    show: boolean;
}


const initialState: IPopupSlice =  {
    show: false,
};

export const NavbarPopupSlice = createSlice({
  name: "NavbarPopup",
  initialState,
  reducers: {
    changeNavbarPopUpShow: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const NavbarPopupReducer = NavbarPopupSlice.reducer;
export const NavbarPopupActions = NavbarPopupSlice.actions;
