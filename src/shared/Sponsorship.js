import React from 'react'
import Headline from './components/Headline'
import HeadlineSmall from './components/HeadlineSmall'
import Copy from './components/Copy'
import { LinkThemed } from './components/Links'

export default ({ sponsorship }) => {
  return (
    <div>
      <Headline>Sponsorship</Headline>

      <Copy>
        As a registered community, nonprofit event we’re looking for
        organizations and individuals, who are willing to enable us to run the
        best, accessible and inclusive conference possible. If you can help,{' '}
        <LinkThemed href={`mailto:${sponsorship}`}>
          reach out for more details
        </LinkThemed>. We’d love to work with you.
      </Copy>

      <HeadlineSmall>Main Sponsors</HeadlineSmall>
      <HeadlineSmall>Community Sponsors</HeadlineSmall>
      <HeadlineSmall>Diversity Sponsors</HeadlineSmall>
      <HeadlineSmall>Media Partners</HeadlineSmall>
    </div>
  )
}
