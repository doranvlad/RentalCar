import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Catalog from "./pages/Catalog/Catalog";
import s from "./App.module.css";

import { useDispatch, useSelector } from "react-redux";
import { takeCarsFromLocal } from "./redux/favoritesSlice";
import { fetchCars } from "./redux/operations";
import { useEffect } from "react";
import { selectPage } from "./redux/catalogSlice";
import clsx from "clsx";

function App() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const styleNav = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  useEffect(() => {
    dispatch(fetchCars(page));
    dispatch(takeCarsFromLocal());
  }, [dispatch]);

  return (
    <>
      <div className={s.nav_wrap}>
        <nav className={s.nav}>
          <NavLink to="/" className={styleNav}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={styleNav}>
            Catalog
          </NavLink>
          <NavLink to="/favorites" className={styleNav}>
            Favorites
          </NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </>
  );
}

export default App;
