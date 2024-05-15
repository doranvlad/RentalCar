import { useDispatch, useSelector } from "react-redux";
import s from "./ModalForCar.module.css";
import {
  closeModal,
  selectCarForModal,
  selectIsOpenModal,
} from "../../redux/modalSlice";
import Modal from "react-modal";
import { useEffect } from "react";
import Button from "../Button/Button";

function ModalForCar() {
  const car = useSelector(selectCarForModal);
  const isOpenModal = useSelector(selectIsOpenModal);
  const dispatch = useDispatch();
  const address = car.address.split(", ");
  const rentalCond = car.rentalConditions.split("\n");

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenModal]);

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={() => {
        dispatch(closeModal());
      }}
      overlayClassName={s.modal_Wrap}
      className={s.modal}
    >
      <img className={s.img} src={car.img} alt={car.description} />
      <div className={s.name}>
        {car.make} <span>{car.model}</span>, {car.year}
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
      <div className={s.description}>{car.description}</div>
      <div className={s.accessories}>Accessories and functionalities:</div>
      <div className={s.more_info}>
        {car.accessories.map((acc, index) => {
          return <div key={index}>{acc}</div>;
        })}
        {car.functionalities.map((func, index) => {
          return <div key={index}>{func}</div>;
        })}
      </div>
      <div className={s.cond}>Rental Conditions:</div>
      <div className={s.cond_wrap}>
        {rentalCond.map((cond, index) => {
          return <div key={index}>{cond}</div>;
        })}
        <div>Mileage: {car.mileage}</div>
        <div>Mileage: {car.rentalPrice}</div>
      </div>
      <Button type={"Rental car"} />

      <div
        className={s.modal_close}
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18 6L6 18"
            stroke="#121417"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#121417"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Modal>
  );
}

export default ModalForCar;
