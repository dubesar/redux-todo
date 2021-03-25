import { createSlice } from "@reduxjs/toolkit";

export const todolistSlice = createSlice({
  name: "todolist",
  initialState: {
    value: []
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addElement: (state, action) => {
      state.value.push(action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, addElement } = todolistSlice.actions;

export default todolistSlice.reducer;
