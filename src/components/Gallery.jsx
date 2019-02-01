import React from "react";
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { colors } from "../styles/variables";

// Assets
import PatientStack from '../images/patient-stack.gif';
import Reacting from '../images/reacting.png';
import SplitzEase from '../images/splitzease.jpg';
import Nike from '../images/nike.png';
import FriendFinder from '../images/dff.png';
import HackerNoon from '../images/hack.png';
import Tacos from '../images/edt.png';
import UpMeet from '../images/upmeet.png';
import Fenway from '../images/fenway.png';

const StyledLayoutContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const galleryImage = css`
  height: 100%;
  width: 100%;
`;

const LinkContainer = styled.a`
  & :hover {
    background-color: red;
    cursor: pointer;
  }
`;

const effectPortfolio = css`
  position: relative;
  overflow: hidden;
  margin: 10px auto;
  max-width: 568px;
  max-height: 398px;
  height: auto;
  cursor: pointer;
  background: ${colors.gray.dark};
  margin: 0 auto;
  height: 100%;
  width: 100%;

  & img,
  & .gatsby-image-wrapper {
    position: relative;
    display: block;
    opacity: 0.75;
  }

  & h2 {
    word-spacing: -0.15em;
    font-weight: 300;
    color: ${colors.white};
  }
  & h2 span {
    font-weight: 700;
  }
  & h2,
  & p {
    margin: 0;
  }
  & p {
    letter-spacing: 1px;
    font-size: 68.5%;
  }

  & img,
  & .gatsby-image-wrapper,
  & h2 {
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
  }
  & img,
  & .gatsby-image-wrapper {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  & h2,
  & p {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 30px;
  }
  & p {
    text-transform: none;
    font-size: 90%;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(0, $fifty, 0);
    transform: translate3d(0, $fifty, 0);
  }

  & :hover img {
    -webkit-transform: translate3d(0, -80px, 0);
    transform: translate3d(0, -80px, 0);
  }

  & :hover h2 {
    -webkit-transform: translate3d(0, -100px, 0);
    transform: translate3d(0, -100px, 0);
  }

  & :hover p {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  figcaption {
    padding: 2em;
    color: ${colors.white};
    text-transform: uppercase;
    font-size: 1.25em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  figcaption::before,
  figcaption::after {
    pointer-events: none;
  }
  figcaption,
  figcaption > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  figcaption > a {
    z-index: 1000;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    opacity: 0;
  }
  h2 {
    word-spacing: -0.15em;
    font-weight: 300;
  }
  h2 span {
    font-weight: 700;
  }
  h2,
  p {
    margin: 0;
  }
  p {
    letter-spacing: 1px;
    font-size: 68.5%;
  }
`;

const GalleryMain = ({ data }) => (
  <StyledLayoutContainer>
    <figure className={effectPortfolio}>
      <img
        className={galleryImage}
        src={PatientStack}
        alt="Patient Stack"
      />
      <figcaption>
        <h2>
          Patient
          <span>Stack</span>
        </h2>
        <p>Patient management system for general practice doctors.</p>
        <LinkContainer
          href="https://patientstack.herokuapp.com/"
          target="_blank"
        />
      </figcaption>
    </figure>
    <figure className={effectPortfolio}>
      <img
        className={galleryImage}
        src={Reacting}
        alt='Portfolio - Reacting To The Times'
      />
      <figcaption>
        <h2>
          Reacting
          <span>To The Times</span>
        </h2>
        <p>A NY Times Scrapper built with React.</p>
        <LinkContainer
          href="https://reacting-to-the-times.herokuapp.com/"
          target="_blank"
        />
      </figcaption>
    </figure>
    <figure className={effectPortfolio}>
      <img className={galleryImage} src={SplitzEase} alt='Portfolio - Splitzease'/>
      <figcaption>
        <h2>
          Splitz
          <span>Ease</span>
        </h2>
        <p>A React-Native mobile application for splitting bills.</p>
        <LinkContainer
          href="https://github.com/ricopella/splitzease"
          target="_blank"
        />
      </figcaption>
    </figure>
    <figure className={effectPortfolio}>
      <img className={galleryImage} src={Nike} alt='Portfolio - Nike Trivia'/>
      <figcaption>
        <h2>
          Nike
          <span>Trivia</span>
        </h2>
        <p>A Nike themed trivia game built with Vanilla JavaScript.</p>
        <LinkContainer
          href="https://codepen.io/Ricopella/full/KvMeza/"
          target="_blank"
        />
      </figcaption>
    </figure>
    <figure className={effectPortfolio}>
      <img
        className={galleryImage}
        src={FriendFinder}
        alt='Portfolio - Friend Finder'
      />
      <figcaption>
        <h2>
          Friend Finder
          <span>Stack</span>
        </h2>
        <p>A Full-Stack application matching users with a dinner buddy.</p>
        <LinkContainer
          href="https://friend-finder-nrs.herokuapp.com/"
          target="_blank"
        />
      </figcaption>
    </figure>
    <figure className={effectPortfolio}>
      <img className={galleryImage} src={HackerNoon} alt='Portfolio - A cup of hacker noon'/>
      <figcaption>
        <h2>
          A Cup of
          <span>Hacker Noon</span>
        </h2>
        <p>A web scrapper built with Cherrio, Node, Express, and MongoDB.</p>
        <LinkContainer
          href="https://cup-of-hackernoon.herokuapp.com/#results"
          target="_blank"
        />
      </figcaption>
    </figure>
    <figure className={effectPortfolio}>
      <img className={galleryImage} src={Tacos} alt='Portfolio - Eat Dos Tacos' />
      <figcaption>
        <h2>Eat-DoS-Tacos</h2>
        <p>A Full-Stack application built with Node, Express, and MySQL.</p>
        <LinkContainer
          href="https://eat-dos-tacos.herokuapp.com/tacos"
          target="_blank"
        />
      </figcaption>
    </figure>
    <figure className={effectPortfolio}>
      <img className={galleryImage} src={UpMeet} alt='Portfolio - UpMeet'/>
      <figcaption>
        <h2>
          Up
          <span>Meet</span>
        </h2>
        <p>Meetup tool built for developers utilizing various API's.</p>
        <LinkContainer
          href="https://ricopella.github.io/upMeet/"
          target="_blank"
        />
      </figcaption>
    </figure>
    <figure className={effectPortfolio}>
      <img className={galleryImage} src={Fenway} alt='Portfolio - Fenway Park Hangman'/>
      <figcaption>
        <h2>
          Fenway Park
          <span>Hangman</span>
        </h2>
        <p>A baseball themed hangman game built with CSS and JS.</p>
        <LinkContainer
          href="https://ricopella.github.io/baseball-hangman/"
          target="_blank"
        />
      </figcaption>
    </figure>
  </StyledLayoutContainer>
);

export default GalleryMain;
