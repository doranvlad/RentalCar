import Button from "../Button/Button";
import s from "./CarsListItem.module.css";
import { useDispatch } from "react-redux";
import { favoriteToggle } from "../../redux/favoritesSlice";
import { useState } from "react";

function CarsListItem({ car }) {
  const address = car.address.split(", ");
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const handleBtnClick = () => {
    console.log("click");
    dispatch(favoriteToggle(car));
  };

  return (
    <div className={s.wrap}>
      <img className={s.img} src={car.img} alt={car.description} />
      <div className={s.name_and_price}>
        <div className={s.name}>
          {car.make} <span>{car.model}</span>, {car.year}
        </div>
        <div className={s.price}>{car.rentalPrice}</div>
      </div>
      <div className={s.more_info}>
        <div>{address[1]}</div>
        <div>{address[2]}</div>
        <div>{car.rentalCompany}</div>
        <div>{car.type}</div>
        <div>{car.model}</div>
        <div>{car.mileage}</div>
        <div>{car.functionalities[0]}</div>
      </div>
      <Button type="Learn more" onClick={handleBtnClick} />
    </div>
  );
}

export default CarsListItem;
