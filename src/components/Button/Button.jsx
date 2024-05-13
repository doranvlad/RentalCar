import clsx from "clsx";
import s from "./Button.module.css";

function Button({ type, onClick }) {
  let styles = null;
  let btnType = "";

  if (type === "Search") {
    styles = clsx(s.btn, s.search);
    btnType = "submit";
  } else if (type === "Learn more") {
    styles = clsx(s.btn, s.learn_more);
  }

  return (
    <button className={styles} type={btnType} onClick={onClick}>
      {type}
    </button>
  );
}

export default Button;
