import React from "react";
import styled from '@emotion/styled'
import Container from "../components/container";
import Page from "../components/page";
import { colors } from "../styles/variables";

const StyledAboutMeContainer = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

const StyledAboutMeColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
`;

const StyledAboutMeP = styled.div`
  font-size: 1.5em;
  color: ${colors.white};
`;

const AboutMeMain = () => (
  <StyledAboutMeContainer >
    <Page
      id="about-me"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: colors.limeGreen,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Container>
        <h1
          style={{
            fontSize: "3rem",
            textAlign: "center",
            textDecoration: "underline",
            color: colors.white
          }}
        >
          {`about me`.toUpperCase()}
        </h1>
        <StyledAboutMeColumn>
          <StyledAboutMeP>
            I wear many hats, one of which is a Full-Stack Web Developer. I’m a
            life long learner that’s always looking for new ways to express my
            creativity. In 2014, I started online courses to focus on Python,
            Javascript, HTML, CSS, and MySQL/SQLite. My current skill set is
            focused around the MERN stack (MongoDB, Express, React, and Node).
          </StyledAboutMeP>
          <StyledAboutMeP>
            Aside from learning to code, I’m a Turntablist, DJ member in The
            Music Please, bulldog owner, amateur photographer, fanatic of all
            Boston sports teams, living in Los Angeles, California. You can
            commonly find me eating at new places, digging crates, in a coffee
            shop, or enjoying the Santa Monica weather with my dog.
          </StyledAboutMeP>
        </StyledAboutMeColumn>
      </Container>
    </Page>
  </StyledAboutMeContainer>
);

export default AboutMeMain;
