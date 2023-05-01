import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getSearch, changeSearch } from "../../../store/reducers/SearchSlice";
import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import classes from "./SearchForm.module.css";
import { rickAndMortyApi } from "../../../services/rickandmorty/rickandmorty.service";

type TFormValues = {
  search: string;
};

const SearchForm: FC = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(getSearch);
  const [searchValue, setsearchValue] = useState(search || "");

  const [trigger] =
    rickAndMortyApi.endpoints.getCharactersByName.useLazyQuery();

  const { register, handleSubmit } = useForm<TFormValues>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setsearchValue(e.currentTarget.value);
  };

  const onSubmit: SubmitHandler<TFormValues> = async () => {
    dispatch(changeSearch(searchValue));
    await trigger(searchValue);
  };

  return (
    <form
      className={classes.searchForm}
      action=""
      onSubmit={handleSubmit(onSubmit)}
    >
      <button type="submit"></button>
      <input
        className={classes.searchInput}
        {...register("search")}
        type="search"
        placeholder="Find"
        onChange={handleChange}
        defaultValue={searchValue}
      />
    </form>
  );
};

export default SearchForm;
