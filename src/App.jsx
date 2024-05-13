import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Catalog from "./pages/Catalog/Catalog";

import { useDispatch, useSelector } from "react-redux";
import { takeCarsFromLocal } from "./redux/favoritesSlice";
import { fetchCars } from "./redux/operations";
import { useEffect } from "react";
import { selectPage } from "./redux/catalogSlice";

function App() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchCars(page));
    dispatch(takeCarsFromLocal());
  }, [dispatch]);

  return (
    <>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
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
