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
  text-align: center;

  ${LinkThemed} {
    overflow-wrap: break-word;
    display: block;
  }
`

const Time = styled.time`
  width: 100px;
`

// const Speaker = styled.p`
//   margin-bottom: 0;
//   font-family: 'Maison Neue Extra Bold', -apple-system, BlinkMacSystemFont,
//     avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
//     segoe ui, arial, sans-serif;
// `

export default ({ conference }) => {
  return (
    <Container>
      <Helmet {...conference}>
        <title>Schedule — {conference.title}</title>
      </Helmet>
      <Headline>Schedule</Headline>

      <HeadlineSmall>March 19</HeadlineSmall>
      <ScheduleWrapper>
        <ScheduleItem>
          <Time>18:00</Time>
          <ScheduleItemContent>
            Community Social (non-attendees welcome)
            <LinkThemed href="https://www.stompingground.beer/">
              Stomping Ground Brewing Co (100 Gipps Street, Collingwood VIC
              3066)
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
      </ScheduleWrapper>

      <HeadlineSmall>March 23</HeadlineSmall>
      <ScheduleWrapper>
        <ScheduleItem>
          <Time>9:00</Time>
          <ScheduleItemContent>Registration</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>9:30</Time>
          <ScheduleItemContent>Opening Remarks</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>9:45</Time>
          <ScheduleItemContent>Workshop Introductions</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>11:00</Time>
          <ScheduleItemContent>Morning Talks + Sessions</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>12:40</Time>
          <ScheduleItemContent>Lunch Break</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>13:20</Time>
          <ScheduleItemContent>"Meet the Meetups"</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>14:00</Time>
          <ScheduleItemContent>Family Photo</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>14:20</Time>
          <ScheduleItemContent>Afternoon Talks + Sessions</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>16:45</Time>
          <ScheduleItemContent>Closing Remarks</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>17:00</Time>
          <ScheduleItemContent>Pub Time!</ScheduleItemContent>
        </ScheduleItem>
      </ScheduleWrapper>

      <HeadlineSmall>Talk Schedule</HeadlineSmall>
      <ScheduleWrapper>
        <ScheduleItem>
          Coming soon...
        </ScheduleItem>
      </ScheduleWrapper>
    </Container>
  )
}
