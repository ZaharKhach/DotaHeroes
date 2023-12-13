import { configureStore } from "@reduxjs/toolkit";
import dotaApi from "./api/dota";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        [dotaApi.reducerPath]: dotaApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dotaApi.middleware)
});
setupListeners(store.dispatch);

export default store;