import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AuthActions } from "../store/auth/auth.slice";

const AllActions = {
  ...AuthActions,
};

export const useActions = () => bindActionCreators(AllActions, useDispatch());
