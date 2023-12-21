import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import dotaApi from "./api/dota";
import filters from './components/Heroes/slices/filterSlice'

const store = configureStore({
    reducer: {
        filters,
        [dotaApi.reducerPath]: dotaApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dotaApi.middleware)
});
setupListeners(store.dispatch);

export default store;