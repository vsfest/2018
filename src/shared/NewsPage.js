import React from 'react'
import styled from 'styled-components'
import Container from './components/Container'
import { withRouter } from 'react-router-dom'
import news from './news/index'
import Title from './components/Title'
import MailingList from './MailingList'

const When = styled.p`
  text-align: center;
  font-size: 0.9rem;
  font-family: 'Maison Neue', -apple-system, BlinkMacSystemFont,
    avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
    segoe ui, arial, sans-serif;
`

const Body = styled.div`
  h2,h3,h4,h5,h6 {
    color: red;
  }
`

const Hr = styled.div`
  border-top: 2px solid ${props => props.theme.secondary};
  margin: 4rem 25%;
`

export default withRouter(({ conference, match }) => {
  const item = news[match.url]
  return (
    <Container>
      <Title>{ item.title }
        <When>{ new Date(item.date).toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long" }) }</When>
      </Title>
      <Body>
        { item.render({ MailingList, Hr }) }
      </Body>
    </Container>
  )
})
