import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AuthActions } from "../store/auth/auth.slice";
import { ContentControllerActions } from "../store/controller/controller.slice";
import { CardDataActions } from './../store/data/data.slice';
import {SearchModalActions} from "./../store/modal/search.modal.slice"

const AllActions = {
  ...AuthActions,
  ...ContentControllerActions,
  ...CardDataActions,
  ...SearchModalActions,
};

export const useActions = () => bindActionCreators(AllActions, useDispatch());
