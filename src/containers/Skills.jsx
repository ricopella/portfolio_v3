import React from 'react'
import Page from '../components/page'
import Container from '../components/container'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

// assets
import reactLogo from '../images/react.svg'
import tsLogo from '../images/ts.svg'
import jsLogo from '../images/js.svg'
import htmlLogo from '../images/html.svg'
import cssLogo from '../images/css.svg'
import jq from '../images/jqk.svg'
import bootstrap from '../images/bootstrap.svg'
import semantic from '../images/semantic.svg'
import hb from '../images/handlebars.svg'
import sass from '../images/sass.svg'
import gulp from '../images/gulp.svg'
import pythonLogo from '../images/python.svg'
import django from '../images/django.svg'
import node from '../images/nodejs.svg'
import fb from '../images/firebase.svg'
import mysql from '../images/mysql.svg'
import sqlite from '../images/sqlite.png'
import mongo from '../images/mongodb.svg'
import express from '../images/express.png'
import socket from '../images/socket-io.svg'
import babel from '../images/babel.svg'
import webpack from '../images/webpack.svg'
import yarn from '../images/yarn.png'
import jest from '../images/jest.svg'
import chai from '../images/chai.png'
import mocha from '../images/mocha.svg'
import git from '../images/git.svg'
import github from '../images/github1.svg'
import code from '../images/vscode.png'

const ImageWrapper = styled.img`
  max-width: 10%;
  margin: 0px 0.375rem;
  padding: 0.3125rem 0.4375rem;

  @media (max-width: 46.875rem) {
    max-width: 21%;

    &.gulp {
      max-width: 14% !important;
    }

    &.firebase {
      max-width: 17% !important;
    }
  }
`

const SkillsWrapper = styled.div`
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  flex: 3;
  flex-wrap: wrap;
  align-items: flex-start;

  @media (max-width: 77.5rem) {
    flex: 2;
  }

  @media (max-width: 51.25rem) {
    flex: 1;
    padding-top: 10%;
  }
`

const SkillsContainer = () => (
  <Page
    id="skills"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.header,
    }}
  >
    <SkillsWrapper>
      <Container style={{ maxWidth: '75em' }}>
        <h1
          style={{
            fontSize: '3rem',
            textAlign: 'center',
            textDecoration: 'underline',
          }}
        >
          {`skills`.toUpperCase()}
        </h1>

        <ImageWrapper
          className="skills-logo"
          src={reactLogo}
          alt="React Logo"
          title="React"
        />
        <ImageWrapper
          className="skills-logo"
          src={tsLogo}
          alt="TypeScript Logo"
          title="TypeScript"
        />
        <ImageWrapper
          className="skills-logo"
          src={jsLogo}
          alt="JavaScript Logo"
          title="JavaScript"
        />
        <ImageWrapper
          className="skills-logo"
          src={htmlLogo}
          alt="HTML5 Logo"
          title="HTML 5"
        />
        <ImageWrapper
          className="skills-logo"
          src={cssLogo}
          alt="CSS3 Logo"
          title="CSS 3"
        />
        <ImageWrapper
          className="skills-logo"
          src={jq}
          alt="jQuery Logo"
          title="jQuery"
        />
        <ImageWrapper
          className="skills-logo"
          src={bootstrap}
          alt="Bootstrap Logo"
          title="Bootstrap"
        />
        <ImageWrapper
          className="skills-logo"
          src={semantic}
          alt="Semantic UI Logo"
          title="Semantic UI"
        />
        <ImageWrapper
          className="skills-logo"
          src={hb}
          alt="Handlebars Logo"
          title="Handlebars"
          style={{ marginBottom: 35 }}
        />
        <ImageWrapper
          className="skills-logo"
          src={sass}
          alt="Sass Logo"
          title="Sass"
        />
        <ImageWrapper
          className="skills-logo gulp"
          src={gulp}
          alt="Gulp Logo"
          title="Gulp"
          style={{ maxWidth: '6%' }}
        />
        <ImageWrapper
          className="skills-logo"
          src={pythonLogo}
          alt="Python Logo"
          title="Python"
        />
        <ImageWrapper
          className="skills-logo"
          src={django}
          alt="django Logo"
          title="Django"
        />
        <ImageWrapper
          className="skills-logo"
          src={node}
          alt="Node.JS Logo"
          title="Node JS"
        />
        <ImageWrapper
          className="skills-logo firebase"
          src={fb}
          alt="Firebase Logo"
          title="Firebase"
          style={{ maxWidth: '6%' }}
        />
        <ImageWrapper
          className="skills-logo"
          src={mysql}
          alt="MySQL Logo"
          title="MySQL"
        />
        <ImageWrapper
          className="skills-logo png"
          src={sqlite}
          alt="SQLite Logo"
          title="SQLite"
        />
        <ImageWrapper
          className="skills-logo"
          src={mongo}
          alt="MongoDB Logo"
          title="MongoDB"
        />
        <ImageWrapper
          className="skills-logo png"
          src={express}
          alt="Express.JS Logo"
          title="Express"
        />
        <ImageWrapper
          className="skills-logo"
          src={socket}
          alt="Socket-io Logo"
          title="Socket io"
        />
        <ImageWrapper
          className="skills-logo"
          src={babel}
          alt="Babel Logo"
          title="Babel"
          style={{ marginBottom: 26 }}
        />
        <ImageWrapper
          className="skills-logo"
          src={webpack}
          alt="Webpack Logo"
          title="Webpack"
        />
        <ImageWrapper
          className="skills-logo"
          src={yarn}
          alt="yarn Logo"
          title="Yarn"
        />
        <ImageWrapper
          className="skills-logo"
          src={jest}
          alt="jest Logo"
          title="Jest"
        />
        <ImageWrapper
          className="skills-logo png"
          src={chai}
          alt="chai Logo"
          title="Chai"
        />
        <ImageWrapper
          className="skills-logo"
          src={mocha}
          alt="mocha Logo"
          title="Mocha"
        />
        <ImageWrapper
          className="skills-logo"
          src={git}
          alt="Git Logo"
          title="Git"
        />
        <ImageWrapper
          className="skills-logo"
          src={github}
          alt="Github Logo"
          title="Github"
        />
        <ImageWrapper
          className="skills-logo png"
          src={code}
          alt="Visual Studio Code Logo"
          title="Visual Studio Code"
        />
      </Container>
    </SkillsWrapper>
  </Page>
)

export default SkillsContainer
