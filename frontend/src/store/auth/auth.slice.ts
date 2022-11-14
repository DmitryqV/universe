import { createSlice } from "@reduxjs/toolkit";

interface IAuthSlice {
  email: "";
  password: "";
}

const initialState: IAuthSlice =  {
  email: "",
  password: ""
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const AuthReducer = AuthSlice.reducer;
export const AuthActions = AuthSlice.actions;
