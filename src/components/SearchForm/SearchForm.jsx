import { useSelector, useDispatch } from "react-redux";
import s from "./SearchForm.module.css";
import Select from "react-select";
import { selectCars } from "../../redux/catalogSlice";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { changeFiltersState, changeIsFiltered } from "../../redux/filtersSlice";
import { customStyles, customStylesPrice } from "./selectStyles";

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
    dispatch(changeIsFiltered());
    dispatch(changeFiltersState(data));
  };

  return (
    <div className={s.form_wrap}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.select_brand_wrap}>
          <label htmlFor="brand">Car brand</label>
          <Select
            id="brand"
            classNamePrefix="react-select-brand"
            styles={customStyles}
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
            styles={customStylesPrice}
            placeholder="To $"
            {...register("price")}
            onChange={(selectedOption) =>
              setValue("price", selectedOption.value)
            }
          />
        </div>
        <div className={s.from_to_wrap}>
          <div>
            <div>Сar mileage / km</div>
            <input
              type="number"
              id=""
              placeholder="From"
              min="0"
              className={s.input_from}
              {...register("from")}
            />
          </div>
          <div>
            <div className={s.hidden}>milleage to</div>
            <input
              type="number"
              placeholder="To"
              className={s.input_to}
              id="to"
              min="0"
              {...register("to")}
            />
          </div>
        </div>
        <Button type={"Search"} onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default SearchForm;
