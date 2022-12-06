import { createSlice } from "@reduxjs/toolkit";

interface IAuthSlice {
  email: string;
  password: string;
}

const initialState: IAuthSlice =  {
  email: "",
  password: ""
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    AuthChangeEmail: (state, action) => {
      state.email = action.payload;
    },
    AuthChangePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const AuthReducer = AuthSlice.reducer;
export const AuthActions = AuthSlice.actions;
