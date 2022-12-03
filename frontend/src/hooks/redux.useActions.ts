import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AuthActions } from "../store/auth/auth.slice";
import { ContentControllerActions } from "../store/controller/controller.slice";

const AllActions = {
  ...AuthActions,
  ...ContentControllerActions,
};

export const useActions = () => bindActionCreators(AllActions, useDispatch());
