import { useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
import s from "./Favorites.module.css";
import { selectFavorites } from "../../redux/favoritesSlice";

function Favorites() {
  const cars = useSelector(selectFavorites);
  return (
    <>
      <CarsList cars={cars} />
    </>
  );
}

export default Favorites;
