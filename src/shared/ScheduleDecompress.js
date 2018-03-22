import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Headline from './components/Headline'
import Container from '../shared/components/Container'
import { LinkThemed } from './components/Links'
import HeadlineSmall from './components/HeadlineSmall'

const workshopMap = require('../assets/workshop-map.jpg')

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

const Speaker = styled.p`
  margin-bottom: 0;
  font-family: 'Maison Neue Extra Bold', -apple-system, BlinkMacSystemFont,
    avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
    segoe ui, arial, sans-serif;
`

const Map = styled.img`
  width: 100%;
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
          <ScheduleItemContent>
            Pub Time!
            <LinkThemed href="http://www.metrohotel.com.au/">
              Just around the corner at The Metropolitan Hotel
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
      </ScheduleWrapper>

      <HeadlineSmall id="talks">Talk Schedule</HeadlineSmall>
      <ScheduleWrapper>
        <ScheduleItem>
          <Time>11:00</Time>
          <ScheduleItemContent>
            <Speaker>Kylie Long</Speaker>
            <LinkThemed href="/speakers#kyliejlong">
              Practical tools for happier, more seamless collaboration
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>11:20</Time>
          <ScheduleItemContent>
            <Speaker>Rob Crowley</Speaker>
            <LinkThemed href="/speakers#robdcrowley">
              Crafting compelling real-time web experiences with GraphQL
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>11:40</Time>
          <ScheduleItemContent>
            <Speaker>Jess Champion</Speaker>
            <LinkThemed href="/speakers#jess_champion">
              A unit test walks into a bar
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>12:00</Time>
          <ScheduleItemContent>
            <Speaker>Jeremy Nagel</Speaker>
            <LinkThemed href="/speakers#jeznag">
              Attack of the mutants: using mutation testing to improve your test suite
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>12:20</Time>
          <ScheduleItemContent>
            <Speaker>Jessica Norris and Ben Taylor</Speaker>
            <LinkThemed href="/speakers#groklearning">
              How to keep your server alive AND teach JS to kids
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>14:20</Time>
          <ScheduleItemContent>
            <Speaker>Keira Hodgkison</Speaker>
            <LinkThemed href="/speakers#keirasaid">
              The Why and How of ReasonML
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>14:40</Time>
          <ScheduleItemContent>
            <Speaker>Juliet Brown</Speaker>
            <LinkThemed href="/speakers#julietbrown84">
              Intersection between art and technology
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>15:00</Time>
          <ScheduleItemContent>
            <Speaker>Maz Hermon</Speaker>
            <LinkThemed href="/speakers#mazhermon">
              How is a UI component library the 'Mise en place' of the modern Web-Chef’s kitchen?
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>15:20</Time>
          <ScheduleItemContent>
            <Speaker>Jason O'Neil</Speaker>
            <LinkThemed href="/speakers#jasonaoneil">
              50,000 lines of spaghetti code (and how to unravel it)
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>15:40</Time>
          <ScheduleItemContent>
            <Speaker>Cory-Ann Joseph</Speaker>
            <LinkThemed href="/speakers#coryannj">
              Why a poker playing AI should have you looking for a new job
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
      </ScheduleWrapper>
      <HeadlineSmall id="map">Workshop Map</HeadlineSmall>
      <Map src={workshopMap} alt={'Workshop Map'} />
    </Container>
  )
}
