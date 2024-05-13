import { useEffect } from "react";
import {
  selectError,
  selectFilteredCars,
  selectLoading,
} from "../../redux/catalogSlice";
import CarsListItem from "../ListItem/CarsListItem";
import s from "./CarsList.module.css";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favoritesSlice";

function CarsList({ cars }) {
  const carsFrom = cars;
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  let favorites = useSelector(selectFavorites);

  if (favorites.length !== 0) {
    favorites = favorites.map((car) => {
      return car.id;
    });
  }

  return (
    <>
      {loading && !error && <b>Request in progress...</b>}
      <ul className={s.list}>
        {carsFrom.map((car) => {
          return (
            <li key={car.id}>
              <CarsListItem car={car} favorites={favorites} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CarsList;