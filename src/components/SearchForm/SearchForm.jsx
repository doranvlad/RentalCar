import { useSelector, useDispatch } from "react-redux";
import s from "./SearchForm.module.css";
import Select from "react-select";
import { selectCars } from "../../redux/catalogSlice";
import Button from "../Button/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { changeFiltersState, changeIsFiltered } from "../../redux/filtersSlice";

function SearchForm() {
  const OrigBrands = useSelector(selectCars);
  const brandsForSelect = new Set();
  const priceForSelect = new Set();
  const dispatch = useDispatch();

  OrigBrands.map((brand) => brandsForSelect.add(brand.make));
  OrigBrands.map((brand) =>
    priceForSelect.add(+brand.rentalPrice.replace("$", ""))
  );

  const arrForBrands = Array.from(brandsForSelect).sort();

  const newBrandsForSelect = arrForBrands.map((brand) => ({
    value: brand,
    label: brand,
  }));

  const arrForPrice = Array.from(priceForSelect);
  arrForPrice.sort((a, b) => {
    return a - b;
  });

  const newPriceForSelect = arrForPrice.map((value) => ({
    value: value + "",
    label: value + "",
  }));

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(changeIsFiltered());
    dispatch(changeFiltersState(data));
  };

  return (
    <div className={s.form_wrap}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.select_brand_wrap}>
          <label htmlFor="brand">Car brand</label>
          <Select
            id="brand"
            options={newBrandsForSelect}
            placeholder="Enter the text"
            {...register("brand")}
            onChange={(selectedOption) =>
              setValue("brand", selectedOption.value)
            }
          />
        </div>
        <div className={s.select_price_wrap}>
          <label htmlFor="price">Price/ 1 hour</label>
          <Select
            id="price"
            options={newPriceForSelect}
            placeholder="To $"
            {...register("price")}
            onChange={(selectedOption) =>
              setValue("price", selectedOption.value)
            }
          />
        </div>
        <div className={s.from_to_wrap}>
          <label htmlFor="from">Сar mileage / km</label>
          <input
            type="number"
            placeholder="From"
            min="0"
            {...register("from")}
          />
          <input type="number" placeholder="To" min="0" {...register("to")} />
        </div>
        <Button type={"Search"} onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default SearchForm;
