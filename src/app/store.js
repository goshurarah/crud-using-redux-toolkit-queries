import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { Api } from "../services/Api";

export const store = configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api.middleware)
})
setupListeners(store.dispatch)