import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { TFormCard } from "types/types";
import countries from "../../data/countries";
import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  female = "Female",
  male = "Male",
}

type TFormValues = {
  email: string;
  birthday: string;
  coutry: string;
  consent: boolean;
  gender: GenderEnum;
  picture: FileList;
};

type FormProps = {
  addCardFunc: (card: TFormCard) => void;
};

const Form: FC<FormProps> = ({ addCardFunc }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<TFormValues>({ mode: "onSubmit", reValidateMode: "onSubmit" });
  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    addCardFunc({
      email: data.email,
      birthday: new Date(data.birthday),
      coutry: data.coutry,
      consent: data.consent,
      gender: data.gender,
      picture: {
        imageType: data.picture[0].type,
        imageData: URL.createObjectURL(data.picture[0]),
      },
    });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, isSubmitSuccessful, reset]);

  return (
    <StyledForm action="" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h6>Email</h6>
        <StyledInput
          {...register("email", {
            required: "Email address is required",
            pattern: {
              value:
                /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
              message: "Email address is incorrect format",
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
          type="text"
        />
        {errors.email && (
          <StyledP role="alert">{errors.email?.message}</StyledP>
        )}
      </div>
      <div>
        <h6>Birthday</h6>
        <StyledInput
          {...register("birthday", {
            required: "Birthday is required",
            validate: (value) =>
              new Date(value) < new Date() ||
              "Birthday can't be more than yesterday",
          })}
          type="date"
          aria-invalid={errors.birthday ? "true" : "false"}
        />
        {errors.birthday && (
          <StyledP role="alert">{errors.birthday?.message}</StyledP>
        )}
      </div>
      <div>
        <h6>Coutry</h6>
        <StyledSelect
          defaultValue=""
          {...register("coutry", { required: "Coutry is required" })}
          aria-invalid={errors.coutry ? "true" : "false"}
        >
          <option value="">----------</option>
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.label}
            </option>
          ))}
        </StyledSelect>
        {errors.coutry && (
          <StyledP role="alert">{errors.coutry?.message}</StyledP>
        )}
      </div>
      <fieldset>
        <legend>Select a gender:</legend>
        <StyledRowFlexbox>
          {["Male", "Female"].map((option) => (
            <StyledLabel key={option}>
              <StyledInput
                {...register("gender", { required: "Gender is required" })}
                type="radio"
                name="gender"
                value={option}
              />
              <div>{option}</div>
            </StyledLabel>
          ))}
        </StyledRowFlexbox>
        {errors.gender && (
          <StyledP role="alert">{errors.gender?.message}</StyledP>
        )}
      </fieldset>
      <div>
        <h6>Profile picture</h6>
        <StyledInput
          {...register("picture", {
            required: "Profile picture is required",
            validate: {
              acceptedFormat: (files: FileList | null) =>
                (files &&
                  ["image/jpg", "image/png", "image/jpeg"].includes(
                    files[0].type
                  )) ||
                "File is not an image",
            },
          })}
          aria-invalid={errors.picture ? "true" : "false"}
          type="file"
        />
        {errors.picture && (
          <StyledP role="alert">{errors.picture?.message}</StyledP>
        )}
      </div>
      <div>
        <StyledLabel>
          <StyledInput
            {...register("consent", {
              required: "You should consent to your personal data",
            })}
            type="checkbox"
            aria-invalid={errors.consent ? "true" : "false"}
          />
          <div>I consent to my personal data</div>
        </StyledLabel>
        {errors.consent && (
          <StyledP role="alert">{errors.consent?.message}</StyledP>
        )}
      </div>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

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

const StyledP = styled.p`
  color: #ff4500;
  font-size: 16px;
`;

export default Form;
