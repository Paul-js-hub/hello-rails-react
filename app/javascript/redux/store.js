import { configureStore } from "@reduxjs/toolkit";

import greetingsReducer from "./greetings/greetings.js";

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;