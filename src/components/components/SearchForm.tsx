import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getSearch, changeSearch } from "../../store/reducers/searchSlice";
import React, { FC } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

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
    <StyledSearchForm action="" onSubmit={handleSubmit(onSubmit)}>
      <button type="submit"></button>
      <StyledInput
        {...register("search")}
        type="search"
        placeholder="Find"
        defaultValue={search}
      />
    </StyledSearchForm>
  );
};

const StyledSearchForm = styled.form`
  display: inline-flex;
  width: 600px;
  height: 100%;
  align-items: center;
`;

const StyledInput = styled.input`
  font-size: 20px;
  border-radius: 30px;
  width: 100%;
  height: 50px;
  padding-left: 60px;
  padding-right: 20px;
  position: relative;
  background: no-repeat left 20px center#FFFFFF
    url("../src/assets/icons/search.svg");
  &::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    cursor: pointer;
    background: no-repeat url("../src/assets/icons/cancel-search.svg");
  }
`;

export default SearchForm;
