import { createSlice } from "@reduxjs/toolkit";

interface IChannelClient {
  socket: string;
}

interface IChannelSlice {
  sockets: IChannelClient[];
}

const initialState: IChannelSlice = {
  sockets: [],
};

export const ChannelControllerSlice = createSlice({
  name: "ContentController",
  initialState,
  reducers: {
    ChannelControllerJoinEvent: (state, action) => {
      state.sockets.push(action.payload);
    },
    ChannelControllerLeaveEvent: (state, action) => {
      state.sockets = state.sockets.filter(
        (el: IChannelClient) => el.socket === action.payload.socket
      );
    },
  },
});

export const ChannelControllerReducer = ChannelControllerSlice.reducer;
export const ChannelControllerActions = ChannelControllerSlice.actions;
