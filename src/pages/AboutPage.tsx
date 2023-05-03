import React from "react";
import Header from "../components/Header/Header";
import styled from "styled-components";

const StyledAboutPage = styled.div`
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

const AboutPage = () => {
  return (
    <>
      <Header label="About" />
      <StyledAboutPage>This is about page!</StyledAboutPage>
    </>
  );
};

export default AboutPage;
