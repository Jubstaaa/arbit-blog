import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { id: 1, name: "Ilker ", photoUrl: "/images/user.jpeg" },
};

const auth = createSlice({
  name: "auth",
  initialState,
});

export default auth.reducer;
