import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { NavbarPopupActions } from "@store/slices/popup/popup.slice";
import { AuthActions } from "@store/slices/auth/auth.slice";
import { ContentControllerActions } from "@store/slices/controller/controller.slice";
import { CardDataActions } from '@store/slices/data/data.slice';
import { SearchModalActions } from "@store/slices/modal/search.modal.slice";
import { ChannelControllerActions } from "@store/slices/channel/channel.slice";

const AllActions = {
  ...AuthActions,
  ...ContentControllerActions,
  ...CardDataActions,
  ...SearchModalActions,
  ...NavbarPopupActions,
  ...ChannelControllerActions
};

export const useActions = () => bindActionCreators(AllActions, useDispatch());
