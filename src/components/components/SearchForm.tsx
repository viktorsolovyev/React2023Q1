import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";

type SearchFormProps = {
  search: string;
  setSearch: (value: string) => void;
};

const SearchForm: FC<SearchFormProps> = ({ search, setSearch }) => {
  const searchValueRef = useRef<string>();
  searchValueRef.current = search;

  useEffect(() => {
    return function cleanup() {
      if (searchValueRef.current != undefined)
        localStorage.setItem("searchValue", searchValueRef.current);
    };
  }, []);

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    setSearch(event.currentTarget.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <StyledSearchForm action="" onSubmit={handleSubmit}>
      <button type="submit"></button>
      <StyledInput
        value={search}
        type="search"
        placeholder="Find"
        onInput={handleChange}
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
