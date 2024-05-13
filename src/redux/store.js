import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./catalogSlice";
import { filtersReducer } from "./filtersSlice";
import { favoritesReducer } from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
  devTools: true,
});
