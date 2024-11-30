import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface user {
  id: number;
  name: string;
  email: string;
  avatar: string
}

const initialState: user = {
  id: 0 ,
  name: "",
  email: "",
  avatar: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    initUser: (_state, action:PayloadAction<user>)=>{
      return action.payload
    }
  },
});

export const { initUser } = userSlice.actions;

export default userSlice.reducer;