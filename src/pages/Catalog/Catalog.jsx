import { useDispatch, useSelector } from "react-redux";
import s from "./Catalog.module.css";

import CarsList from "../../components/CarsList/CarsList";
import SearchForm from "../../components/SearchForm/SearchForm";
import { selectFilteredCars } from "../../redux/catalogSlice";
import { fetchCars } from "../../redux/operations";

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
