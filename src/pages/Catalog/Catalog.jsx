import { useSelector } from "react-redux";
import s from "./Catalog.module.css";
import CarsList from "../../components/CarsList/CarsList";
import SearchForm from "../../components/SearchForm/SearchForm";
import {
  selectFilteredCars,
  selectItemsOnLastPage,
  selectPerPage,
} from "../../redux/catalogSlice";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { selectIsFiltered } from "../../redux/filtersSlice";
import { selectIsOpenModal } from "../../redux/modalSlice";
import ModalForCar from "../../components/ModalForCar/ModalForCar";

function Catalog() {
  const cars = useSelector(selectFilteredCars);
  const onLastPage = useSelector(selectItemsOnLastPage);
  const perPage = useSelector(selectPerPage);
  const isFiltered = useSelector(selectIsFiltered);
  const isOpenModal = useSelector(selectIsOpenModal);

  return (
    <>
      {isOpenModal && <ModalForCar />}
      <SearchForm />
      <CarsList cars={cars} />
      {onLastPage < perPage || isFiltered ? "" : <LoadMoreBtn />}
    </>
  );
}

export default Catalog;
