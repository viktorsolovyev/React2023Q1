import React, { Component } from "react";
import styled from "styled-components";
import countries from "../../data/countries";

type Props = {
  [key: string]: never;
};

type State = Record<string, never>;

const StyledForm = styled.form`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100%;
  align-items: center;
  gap: 10px;
`;

const StyledInput = styled.input`
  font-size: 20px;
  border-radius: 10px;
  width: 500px;
  height: 45px;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledSelect = styled.select`
  font-size: 20px;
  border-radius: 10px;
  width: 500px;
  height: 45px;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledButton = styled.button`
  padding: 11px 38px;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  background: #1c1c1c;
  border-radius: 25px;
  border: solid 1px transparent;
  transition-property: background, border, color;
  transition-timing-function: ease;
  transition-duration: 0.4s;
  &:hover {
    color: #1c1c1c;
    border: solid 1px #1c1c1c;
    background: white;
  }
`;

class Form extends Component<Props, State> {
  inputEmail;
  inputBirthday;
  selectCoutry;
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputEmail = React.createRef<HTMLInputElement>();
    this.inputBirthday = React.createRef<HTMLInputElement>();
    this.selectCoutry = React.createRef<HTMLSelectElement>();
  }

  handleSubmit(event: React.SyntheticEvent) {
    console.log(this.selectCoutry);
    event.preventDefault();
  }

  render() {
    return (
      <StyledForm action="" onSubmit={this.handleSubmit}>
        <div>
          <h6>Email</h6>
          <StyledInput ref={this.inputEmail} type="text" />
        </div>
        <div>
          <h6>Birthday</h6>
          <StyledInput ref={this.inputBirthday} type="date" />
        </div>
        <div>
          <h6>Coutry</h6>
          <StyledSelect defaultValue="" ref={this.selectCoutry}>
            <option value="">----------</option>
            {countries.map((country, index) => (
              <option key={index} value={country.name}>
                {country.label}
              </option>
            ))}
          </StyledSelect>
        </div>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    );
  }
}

export default Form;
