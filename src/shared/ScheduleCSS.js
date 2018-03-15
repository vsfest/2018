import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Headline from './components/Headline'
import Container from '../shared/components/Container'
import { LinkThemed } from './components/Links'
import HeadlineSmall from './components/HeadlineSmall'

const ScheduleWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
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
      <HeadlineSmall>March 20</HeadlineSmall>
      <ScheduleWrapper>
        <ScheduleItem>
          <Time>8:30</Time>
          <ScheduleItemContent>Registration and Breakfast</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>10:00</Time>
          <ScheduleItemContent>Opening Remarks</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>10:15</Time>
          <ScheduleItemContent>
            <Speaker>David Khourshid</Speaker>
            <LinkThemed href="/speakers#davidkpiano">
              Behind the Illusions: Impossibly high-performance layout
              animations
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>10:45</Time>
          <ScheduleItemContent>
            <Speaker>Brenda Storer</Speaker>
            <LinkThemed href="/speakers#brendamarienyc">
              How to use CSS grid today in the real world
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>11:15</Time>
          <ScheduleItemContent>Coffee Break</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>11:45</Time>
          <ScheduleItemContent>
            <Speaker>Jeremy Wagner</Speaker>
            <LinkThemed href="/speakers#malchata">
              Faster fonts for speed fanatics
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>12:15</Time>
          <ScheduleItemContent>
            <Speaker>Julie Grundy</Speaker>
            <LinkThemed href="/speakers#stringy">
              Can you see that OK? CSS tips for low-vision accessibility
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>12:45</Time>
          <ScheduleItemContent>Lunch Break</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>14:45</Time>
          <ScheduleItemContent>
            <Speaker>Diana Mounter</Speaker>
            <LinkThemed href="/speakers#broccolini">
              Interaction of color systems
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>15:15</Time>
          <ScheduleItemContent>
            <Speaker>Sam Richard</Speaker>
            <LinkThemed href="/speakers#snugug">
              Magic tricks with Houdini
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>15:45</Time>
          <ScheduleItemContent>Sweets Break</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>16:15</Time>
          <ScheduleItemContent>
            <Speaker>Theresa Ma</Speaker>
            <LinkThemed href="/speakers#mapotato">
              Effective design and engineering collaboration
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>16:45</Time>
          <ScheduleItemContent>
            <Speaker>Ivana McConnell</Speaker>
            <LinkThemed href="/speakers#IvanaMcConnell">
              Journeys: What makes a developer, really?
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>17:15</Time>
          <ScheduleItemContent>Closing Remarks</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>17:35</Time>
          <ScheduleItemContent>Family Photo</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>18:00</Time>
          <ScheduleItemContent>Party at the Meat Market</ScheduleItemContent>
        </ScheduleItem>
      </ScheduleWrapper>
    </Container>
  )
}
