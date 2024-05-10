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
      state.filters.isFiltered;
    },
    selectBrand: (state) => {
      state.filters.brand;
    },
    selectPrice: (state) => {
      state.filters.price;
    },
    selectMileage: (state) => {
      state.filters.mileage;
    },
    selectFiltersState: (state) => {
      state.filters;
    },
  },
  reducers: {
    changeIsFiltered: (state) => {
      state.filters.isFiltered = !state.filters.isFiltered;
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
  changeIsFiltered,
  changeBrand,
  changePrice,
  changeMilFrom,
  changeMilTo,
} = filtersSlice.actions;
