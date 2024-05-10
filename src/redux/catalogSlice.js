import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";
import { selectFiltersState } from "./filtersSlice";

const initialState = {
  cars: {
    items: [],
    loading: false,
    error: null,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.cars.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars.items = action.payload;
        state.cars.error = null;
        state.cars.loading = false;
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
        car.rentalPrice === value.price;
      });
    }

    if (value.mileage.from) {
      cars = cars.filter((car) => {
        car.mileage > value.mileage.from;
      });
    }

    if (value.mileage.to) {
      cars = cars.filter((car) => {
        car.mileage < value.mileage.to;
      });
    }

    return cars;
  }
);

export const carsReducer = carsSlice.reducer;
export const { selectLoading, selectError } = carsSlice.selectors;
