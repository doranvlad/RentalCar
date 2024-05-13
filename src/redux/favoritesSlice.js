import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favorites: {
    items: [],
  },
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  selectors: {
    selectFavorites: (state) => {
      return state.favorites.items;
    },
  },
  reducers: {
    favoriteToggle: (state, { payload }) => {
      const id = payload.id;
      const index = state.favorites.items.findIndex((car) => car.id === id);

      if (index !== -1) {
        state.favorites.items = state.favorites.items.filter(
          (car) => car.id !== id
        );
      } else {
        state.favorites.items.push(payload);
      }

      const serializedState = JSON.stringify(state.favorites.items);
      localStorage.setItem("favorites", serializedState);
    },
    takeCarsFromLocal: (state) => {
      const serializedState = localStorage.getItem("favorites");
      if (serializedState === null) {
        return;
      }
      state.favorites.items = JSON.parse(serializedState);
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { selectFavorites } = favoritesSlice.selectors;
export const { takeCarsFromLocal, favoriteToggle } = favoritesSlice.actions;
