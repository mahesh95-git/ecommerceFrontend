import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  isLogin: false,
  isReview: false,
  isLoading: true,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {

      state.user = action.payload;
    },
    setLogin: (state, action) => {
  
      state.isLogin = action.payload;
    },

    setReview: (state, action) => {
      state.isReview = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const { setUser, setLogin, setReview,setLoading } = userSlice.actions;
export default userSlice.reducer;
