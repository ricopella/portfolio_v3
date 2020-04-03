import React from 'react'
import TypeIt from 'typeit-react'

const TypeItDescription = () => (
  <TypeIt
    options={{ loop: true }}
    getBeforeInit={instance => {
      instance
        .type('Full-Stack Developer')
        .pause(900)
        .delete()
        .type('Front-End Developer')
        .pause(900)
        .delete()
        .type('Freelance Developer')
        .pause(900)
        .delete()
        .type('Scrum Master')
        .pause(700)
        .delete()
        .type('Project Manager')
        .pause(700)
        .delete()
        .type('DeeJay')
        .pause(500)
        .delete()
        .type('Turntablist')
        .pause(500)
        .delete()
        .type('Producer')
        .pause(500)
        .delete()
        .type('Bulldog Owner')
        .pause(500)
        .delete()
        .type('Boston Sports Fan')
        .pause(500)
      return instance
    }}
  />
)

export default TypeItDescription
