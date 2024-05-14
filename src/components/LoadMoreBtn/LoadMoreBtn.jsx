import { useDispatch, useSelector } from "react-redux";
import s from "./LoadMoreBtn.module.css";
import { selectPage } from "../../redux/catalogSlice";
import { fetchCars } from "../../redux/operations";

function LoadMoreBtn() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  const handleClick = () => {
    dispatch(fetchCars(page));
  };
  return (
    <div className={s.load_btn}>
      <p onClick={handleClick}>Load more</p>
    </div>
  );
}

export default LoadMoreBtn;
