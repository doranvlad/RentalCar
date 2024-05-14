import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: {
    isOpen: false,
    car: {},
  },
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  selectors: {
    selectIsOpenModal: (state) => {
      return state.modals.isOpen;
    },
    selectCarForModal: (state) => {
      return state.modals.car;
    },
  },
  reducers: {
    closeModal: (state) => {
      state.modals.isOpen = false;
      state.modals.car = {};
    },
    opelModal: (state, { payload }) => {
      state.modals.car = payload;
      state.modals.isOpen = true;
    },
  },
});

export const modalsReducer = modalsSlice.reducer;
export const { selectIsOpenModal, selectCarForModal } = modalsSlice.selectors;
export const { closeModal, opelModal } = modalsSlice.actions;
