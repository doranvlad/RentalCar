import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Catalog from "./pages/Catalog/Catalog";

import { useDispatch } from "react-redux";
import { takeCarsFromLocal } from "./redux/favoritesSlice";
import { fetchCars } from "./redux/operations";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
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
