import React, { Component, MutableRefObject } from "react";
import styled from "styled-components";
import countries from "../../data/countries";

type Props = {
  [key: string]: never;
};

type State = Record<string, never>;

class Form extends Component<Props, State> {
  inputEmail;
  inputBirthday;
  selectCoutry;
  checkboxConsent;
  radioGender: MutableRefObject<HTMLInputElement[] | null>;
  inputPicture;

  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputEmail = React.createRef<HTMLInputElement>();
    this.inputBirthday = React.createRef<HTMLInputElement>();
    this.selectCoutry = React.createRef<HTMLSelectElement>();
    this.checkboxConsent = React.createRef<HTMLInputElement>();
    this.radioGender = React.createRef();
    this.radioGender.current = [];
    this.inputPicture = React.createRef<HTMLInputElement>();
  }

  handleSubmit(event: React.SyntheticEvent) {
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
        <fieldset>
          <legend>Select a gender:</legend>
          <StyledRowFlexbox>
            {["male", "female"].map((option) => (
              <StyledLabel key={option}>
                <StyledInput
                  ref={(element: HTMLInputElement) =>
                    this.radioGender.current?.push(element)
                  }
                  type="radio"
                  name="gender"
                  value={option}
                />
                <div>{option[0].toUpperCase() + option.slice(1)}</div>
              </StyledLabel>
            ))}
          </StyledRowFlexbox>
        </fieldset>
        <div>
          <h6>Profile picture</h6>
          <StyledInput ref={this.inputPicture} type="file" />
        </div>
        <div>
          <StyledLabel>
            <StyledInput ref={this.checkboxConsent} type="checkbox" />
            <div>I consent to my personal data</div>
          </StyledLabel>
        </div>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    );
  }
}

const StyledRowFlexbox = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledForm = styled.form`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100%;
  align-items: center;
  gap: 10px;
`;

const StyledLabel = styled.label`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 2px;
`;

const StyledInput = styled.input`
  font-size: 20px;
  border-radius: 10px;
  width: 500px;
  height: 45px;
  padding-left: 10px;
  padding-right: 10px;
  &[type="checkbox"],
  &[type="radio"] {
    width: 20px;
    height: 20px;
  }
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

export default Form;
