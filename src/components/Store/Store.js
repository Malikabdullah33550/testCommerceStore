import { configureStore } from "@reduxjs/toolkit";

let Store = configureStore({
  reducer: {
    name : 'ComputerSlice'
  },
});

