import React from 'react'
import styled from 'styled-components'
import Container from './components/Container'
import { withRouter } from 'react-router-dom'
import news from './news/index'
import Title from './components/Title'
import MailingList from './MailingList'
import { typography } from '../styles/traits'

const When = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 30px 0 0 0;
  color: hsla(0, 0%, 50%, 1);
  ${typography.normal};
`

const Body = styled.div`
  a {
    color: ${props => props.theme.primary};
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.primaryHover};
    }
  }
`

const H2 = styled.h2`
  ${typography.bold};
`

const Spacer = styled.div`
  height: 60px;
`

const Hr = styled.div`
  border-top: 2px solid ${props => props.theme.secondary};
  margin: 4rem 25%;
`

export default withRouter(({ conference, match }) => {
  const item = news[match.url]
  return (
    <Container>
      <Title>
        {item.title}
        <When>
          {new Date(item.date).toLocaleDateString('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
          })}
        </When>
      </Title>
      <Body>{item.render({ MailingList, H2, Hr, Spacer })}</Body>
    </Container>
  )
})
