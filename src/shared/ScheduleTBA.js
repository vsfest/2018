import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Headline from './components/Headline'
import Container from '../shared/components/Container'
import { LinkThemed } from './components/Links'
import HeadlineSmall from './components/HeadlineSmall'

const ScheduleWrapper = styled.ul`
  list-style-type: none;
  margin: 0 0 60px 0;
  padding: 0;
`

const ScheduleItem = styled.li`
  display: flex;
  padding: 30px 0;
  margin: 0;
  border-bottom: 2px solid hsla(0, 0%, 0%, 0.2);

  &:last-child {
    border: none;
  }
`

const ScheduleItemContent = styled.div`
  width: calc(100% - 100px);

  ${LinkThemed} {
    overflow-wrap: break-word;
    display: block;
  }
`

const Time = styled.time`
  width: 100px;
`

const Speaker = styled.p`
  margin-bottom: 0;
  font-family: 'Maison Neue Extra Bold', -apple-system, BlinkMacSystemFont,
    avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
    segoe ui, arial, sans-serif;
`

export default ({ conference }) => {
  return (
    <Container>
      <Helmet {...conference}>
        <title>Schedule — {conference.title}</title>
      </Helmet>
      <Headline>Schedule</Headline>
      <HeadlineSmall>Schedule coming soon!</HeadlineSmall>
    </Container>
  )
}
