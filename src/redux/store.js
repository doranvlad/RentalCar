import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./catalogSlice";
import { filtersReducer } from "./filtersSlice";
import { favoritesReducer } from "./favoritesSlice";
import { modalsReducer } from "./modalSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
    modals: modalsReducer,
  },
  devTools: true,
});
