import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";
import { selectFiltersState } from "./filtersSlice";

const initialState = {
  cars: {
    items: [],
    loading: false,
    error: null,
    perPage: 12,
    itemsOnLastPage: null,
    page: 1,
  },
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  selectors: {
    selectCars: (state) => {
      return state.cars.items;
    },
    selectLoading: (state) => {
      return state.cars.loading;
    },
    selectError: (state) => {
      return state.cars.error;
    },
    selectPerPage: (state) => {
      return state.cars.perPage;
    },
    selectItemsOnLastPage: (state) => {
      return state.cars.itemsOnLastPage;
    },
    selectPage: (state) => {
      return state.cars.page;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.cars.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        // state.cars.items = action.payload;
        state.cars.items = [...state.cars.items, ...action.payload];
        state.cars.itemsOnLastPage = action.payload.length;
        state.cars.error = null;
        state.cars.loading = false;
        state.cars.page += 1;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.cars.error = action.payload;
        state.cars.loading = false;
      });
  },
});

export const selectFilteredCars = createSelector(
  [(state) => state.cars.cars.items, selectFiltersState],
  (cars, value) => {
    if (!value.isFiltered) {
      return cars;
    }

    if (value.brand) {
      cars = cars.filter((car) => {
        return car.make === value.brand;
      });
    }

    if (value.price) {
      cars = cars.filter((car) => {
        return +car.rentalPrice.replace("$", "") <= value.price;
      });
    }

    if (value.mileage.from) {
      cars = cars.filter((car) => {
        const find = +car.mileage - +value.mileage.from;

        return find >= 0;
      });
    }

    if (value.mileage.to) {
      cars = cars.filter((car) => {
        return +car.mileage - +value.mileage.to <= 0;
      });
    }

    return cars;
  }
);

export const carsReducer = carsSlice.reducer;
export const {
  selectLoading,
  selectError,
  selectCars,
  selectPerPage,
  selectItemsOnLastPage,
  selectPage,
} = carsSlice.selectors;
