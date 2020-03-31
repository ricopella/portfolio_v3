import React from 'react'
import Page from '../../components/Page/index'
import Container from '../../components/Container/index'

import Styled from './Skills.styles'

// assets
import reactLogo from '../../images/react.svg'
import tsLogo from '../../images/ts.svg'
import jsLogo from '../../images/js.svg'
import htmlLogo from '../../images/html.svg'
import cssLogo from '../../images/css.svg'
import jq from '../../images/jqk.svg'
import bootstrap from '../../images/bootstrap.svg'
import semantic from '../../images/semantic.svg'
import hb from '../../images/handlebars.svg'
import sass from '../../images/sass.svg'
import gulp from '../../images/gulp.svg'
import pythonLogo from '../../images/python.svg'
import django from '../../images/django.svg'
import node from '../../images/nodejs.svg'
import fb from '../../images/firebase.svg'
import mysql from '../../images/mysql.svg'
import sqlite from '../../images/sqlite.png'
import mongo from '../../images/mongodb.svg'
import express from '../../images/express.png'
import socket from '../../images/socket-io.svg'
import babel from '../../images/babel.svg'
import webpack from '../../images/webpack.svg'
import yarn from '../../images/yarn.png'
import jest from '../../images/jest.svg'
import chai from '../../images/chai.png'
import mocha from '../../images/mocha.svg'
import git from '../../images/git.svg'
import github from '../../images/github1.svg'
import code from '../../images/vscode.png'

const SkillsContainer = () => (
  <Page id="skills" css={Styled.PageHeading}>
    <Styled.SkillsWrapper>
      <Container style={{ maxWidth: '75em' }}>
        <h1 css={Styled.PageTitle}>{`skills`.toUpperCase()}</h1>

        <Styled.ImageWrapper
          className="skills-logo"
          src={reactLogo}
          alt="React Logo"
          title="React"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={tsLogo}
          alt="TypeScript Logo"
          title="TypeScript"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={jsLogo}
          alt="JavaScript Logo"
          title="JavaScript"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={htmlLogo}
          alt="HTML5 Logo"
          title="HTML 5"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={cssLogo}
          alt="CSS3 Logo"
          title="CSS 3"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={jq}
          alt="jQuery Logo"
          title="jQuery"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={bootstrap}
          alt="Bootstrap Logo"
          title="Bootstrap"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={semantic}
          alt="Semantic UI Logo"
          title="Semantic UI"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={hb}
          alt="Handlebars Logo"
          title="Handlebars"
          style={{ marginBottom: 35 }}
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={sass}
          alt="Sass Logo"
          title="Sass"
        />
        <Styled.ImageWrapper
          className="skills-logo gulp"
          src={gulp}
          alt="Gulp Logo"
          title="Gulp"
          style={{ maxWidth: '6%' }}
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={pythonLogo}
          alt="Python Logo"
          title="Python"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={django}
          alt="django Logo"
          title="Django"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={node}
          alt="Node.JS Logo"
          title="Node JS"
        />
        <Styled.ImageWrapper
          className="skills-logo firebase"
          src={fb}
          alt="Firebase Logo"
          title="Firebase"
          style={{ maxWidth: '6%' }}
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={mysql}
          alt="MySQL Logo"
          title="MySQL"
        />
        <Styled.ImageWrapper
          className="skills-logo png"
          src={sqlite}
          alt="SQLite Logo"
          title="SQLite"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={mongo}
          alt="MongoDB Logo"
          title="MongoDB"
        />
        <Styled.ImageWrapper
          className="skills-logo png"
          src={express}
          alt="Express.JS Logo"
          title="Express"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={socket}
          alt="Socket-io Logo"
          title="Socket io"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={babel}
          alt="Babel Logo"
          title="Babel"
          style={{ marginBottom: 26 }}
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={webpack}
          alt="Webpack Logo"
          title="Webpack"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={yarn}
          alt="yarn Logo"
          title="Yarn"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={jest}
          alt="jest Logo"
          title="Jest"
        />
        <Styled.ImageWrapper
          className="skills-logo png"
          src={chai}
          alt="chai Logo"
          title="Chai"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={mocha}
          alt="mocha Logo"
          title="Mocha"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={git}
          alt="Git Logo"
          title="Git"
        />
        <Styled.ImageWrapper
          className="skills-logo"
          src={github}
          alt="Github Logo"
          title="Github"
        />
        <Styled.ImageWrapper
          className="skills-logo png"
          src={code}
          alt="Visual Studio Code Logo"
          title="Visual Studio Code"
        />
      </Container>
    </Styled.SkillsWrapper>
  </Page>
)

export default SkillsContainer
