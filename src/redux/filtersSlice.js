import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    isFiltered: false,
    brand: "",
    price: "",
    mileage: {
      from: null,
      to: null,
    },
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  selectors: {
    selectIsFiltered: (state) => {
      return state.filters.isFiltered;
    },
    selectBrand: (state) => {
      return state.filters.brand;
    },
    selectPrice: (state) => {
      return state.filters.price;
    },
    selectMileage: (state) => {
      return state.filters.mileage;
    },
    selectFiltersState: (state) => {
      return state.filters;
    },
  },
  reducers: {
    changeFiltersState: (state, { payload }) => {
      console.log(payload);
      state.filters.brand = payload.brand;
      if (payload.price) {
        // state.filters.price = "$" + payload.price;
        state.filters.price = +payload.price;
      }
      state.filters.mileage.from = +payload.from;
      state.filters.mileage.to = +payload.to;
      // state.filters.isFiltered = !state.filters.isFiltered;
    },
    changeIsFiltered: (state) => {
      state.filters.isFiltered = true;
    },
    changeBrand: (state, { payload }) => {
      state.filters.brand = payload;
    },
    changePrice: (state, { payload }) => {
      state.filters.price = payload;
    },
    changeMilFrom: (state, { payload }) => {
      state.filters.mileage.from = payload;
    },
    changeMilTo: (state, { payload }) => {
      state.filters.mileage.to = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const {
  selectIsFiltered,
  selectBrand,
  selectPrice,
  selectMileage,
  selectFiltersState,
} = filtersSlice.selectors;
export const {
  changeFiltersState,
  changeIsFiltered,
  changeBrand,
  changePrice,
  changeMilFrom,
  changeMilTo,
} = filtersSlice.actions;
