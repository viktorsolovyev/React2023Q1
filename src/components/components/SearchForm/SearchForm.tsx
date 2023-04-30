import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getSearch, changeSearch } from "../../../store/reducers/SearchSlice";
import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import classes from "./SearchForm.module.css";

type TFormValues = {
  search: string;
};

const SearchForm: FC = () => {
  const { register, handleSubmit } = useForm<TFormValues>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<TFormValues> = async (data) => {
    if (data.search !== search) dispatch(changeSearch(data.search));
  };

  const dispatch = useAppDispatch();
  const search = useAppSelector(getSearch);

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
        defaultValue={search}
      />
    </form>
  );
};

export default SearchForm;
