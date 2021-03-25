import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "../reducers/todolist/todolistSlice";

export default configureStore({
  reducer: {
    todolist: todolistReducer
  }
});
