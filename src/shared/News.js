import React from 'react'
import Headline from './components/Headline'
import Copy from './components/Copy'
import { Link } from 'react-router-dom'
import { LinkThemed } from './components/Links'
import withConference from './withConference'

const StyledLink = LinkThemed.withComponent(Link)

export default withConference(({ conference: { news } }) => {
  return (news.length > 0) && (
    <div>
      <Headline>News</Headline>

      <Copy>
        {news.map(item => (
          <div key={item.title}>
            <StyledLink to={item.url}>{item.title}</StyledLink>
          </div>
        ))}
      </Copy>
    </div>
  )
})
