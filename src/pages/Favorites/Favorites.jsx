import { useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
import s from "./Favorites.module.css";
import { selectFavorites } from "../../redux/favoritesSlice";
import ModalForCar from "../../components/ModalForCar/ModalForCar";
import { selectIsOpenModal } from "../../redux/modalSlice";

function Favorites() {
  const cars = useSelector(selectFavorites);
  const isOpenModal = useSelector(selectIsOpenModal);

  return (
    <>
      {isOpenModal && <ModalForCar />}
      <CarsList cars={cars} />
    </>
  );
}

export default Favorites;
