import React from 'react'
import Headline from './components/Headline'

export default ({ team }) => {
  return (
    <div>
      <Headline>Get in touch</Headline>
      <a href={`mailto:${team}`}>{team}</a>
    </div>
  )
}
