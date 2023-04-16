import React, { FC } from "react";
import styled from "styled-components";
import Form from "./Form";
import CardList from "../forms/CardList";

const FormsSection: FC = () => {
  return (
    <StyledFormsBlock>
      <Form />
      <CardList />
    </StyledFormsBlock>
  );
};

const StyledFormsBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1680px;
  gap: 30px;
  margin: 0 auto;
  align-items: center;
  max-width: 1700px;
  margin-top: 10px;
  font-size: 2rem;
`;

export default FormsSection;
