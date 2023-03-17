import React, { Component } from "react";
import styled from "styled-components";

type Props = {
  [key: string]: never;
};

type State = {
  search: string;
};

const StyledSearchForm = styled.form`
  display: inline-flex;
  width: 389px;
  height: 100%;
  align-items: center;
`;

const StyledInput = styled.input`
  font-size: 20px;
  border-radius: 30px;
  width: 100%;
  height: 53px;
  padding-left: 60px;
  padding-right: 20px;
  position: relative;
  background: no-repeat left 20px center#F5F5F5
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

class SearchForm extends Component<Props, State> {
  state: State = {
    search: "",
  };
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ search: event.currentTarget.value });
    localStorage.setItem("searchValue", event.currentTarget.value);
  }

  componentDidMount() {
    this.setState({ search: localStorage.getItem("searchValue") || "" });
  }

  componentWillUnmount() {
    localStorage.setItem("searchValue", this.state.search);
  }

  render() {
    return (
      <StyledSearchForm action="" onSubmit={(e) => e.preventDefault()}>
        <button type="submit"></button>
        <StyledInput
          value={this.state.search}
          type="search"
          placeholder="Find"
          onInput={this.handleChange}
        />
      </StyledSearchForm>
    );
  }
}

export default SearchForm;
