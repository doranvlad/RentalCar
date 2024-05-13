import { useDispatch, useSelector } from "react-redux";
import s from "./Catalog.module.css";

import CarsList from "../../components/CarsList/CarsList";
import SearchForm from "../../components/SearchForm/SearchForm";
import {
  selectFilteredCars,
  selectItemsOnLastPage,
  selectPerPage,
} from "../../redux/catalogSlice";
import { fetchCars } from "../../redux/operations";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

function Catalog() {
  const cars = useSelector(selectFilteredCars);
  const onLastPage = useSelector(selectItemsOnLastPage);
  const perPage = useSelector(selectPerPage);

  return (
    <>
      <SearchForm />
      <CarsList cars={cars} />
      {onLastPage < perPage ? "" : <LoadMoreBtn />}
    </>
  );
}

export default Catalog;
