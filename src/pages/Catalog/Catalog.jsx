import { useDispatch, useSelector } from "react-redux";
import s from "./Catalog.module.css";
import { useEffect } from "react";

import CarsList from "../../components/CarsList/CarsList";
import SearchForm from "../../components/SearchForm/SearchForm";
import { takeCarsFromLocal } from "../../redux/favoritesSlice";
import { fetchCars } from "../../redux/operations";
import { selectFilteredCars } from "../../redux/catalogSlice";

function Catalog() {
  const cars = useSelector(selectFilteredCars);

  return (
    <>
      <SearchForm />
      <CarsList cars={cars} />
    </>
  );
}

export default Catalog;
