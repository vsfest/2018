import React from 'react'
import Headline from './components/Headline'
import Copy from './components/Copy'

export default ({ sponsorship }) => {
  return (
    <div>
      <Headline>Sponsorship</Headline>

      <Copy>We’re looking for more people to help support this event.
      If your organisation could help, please drop an email to <a href={`mailto:${sponsorship}`}>{sponsorship}</a> for more details.</Copy>
    </div>
  )
}
