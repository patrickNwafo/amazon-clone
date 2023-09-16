import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "@/slices/basketSlice";

// the global store setup

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

// import { configureStore } from "@reduxjs/toolkit";
// import basketReducer from "../slices/basketSlice";

// export const store = configureStore({
//   reducer: {
//     basket: basketReducer,
//   },
// });
