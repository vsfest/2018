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

      <HeadlineSmall>March 21 — Day One</HeadlineSmall>
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
            <Speaker>Amy Nguyen</Speaker>
            <LinkThemed href="/speakers#amyngyn">
              Using Chrome Developer Tools to hack your way into concerts
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>10:45</Time>
          <ScheduleItemContent>
            <Speaker>Mathias Bynens</Speaker>
            <LinkThemed href="/speakers#mathias">
              $JAVASCRIPT_ENGINE internals for JavaScript developers
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
            <Speaker>Vigneshwer Dhinakaran</Speaker>
            <LinkThemed href="/speakers#dvigneshwer">
              Pumping up Node.js modules with Rust!
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>12:15</Time>
          <ScheduleItemContent>
            <Speaker>Irina Shestak</Speaker>
            <LinkThemed href="/speakers#_lrlna">
              HTTP2, one frame at a time
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
            <Speaker>Suz Hinton</Speaker>
            <LinkThemed href="/speakers#noopkat">
              I'm afraid your browser has been talking to the robots again - a
              gentle intro to WebUSB
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>15:15</Time>
          <ScheduleItemContent>
            <Speaker>Craig Spence</Speaker>
            <LinkThemed href="/speakers#phenomnominal">
              Fantastic ASTs and where to find them
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>15:45</Time>
          <ScheduleItemContent>Coffee Break</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>16:15</Time>
          <ScheduleItemContent>
            <Speaker>Caleb Sotelo</Speaker>
            <LinkThemed href="/speakers#calebds">
              Taming the World’s Largest Trojan Horse
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>16:45</Time>
          <ScheduleItemContent>Closing Remarks</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>18:00</Time>
          <ScheduleItemContent>
            Party
            <LinkThemed href="http://www.pilgrimbar.com.au/">
              Pilgrim Bar (Vaults 15-19 Federation Wharf Federation Square,
              Melbourne 3000)
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
      </ScheduleWrapper>

      <HeadlineSmall>March 22 — Day Two</HeadlineSmall>

      <ScheduleWrapper>
        <ScheduleItem>
          <Time>9:00</Time>
          <ScheduleItemContent>Registration and Breakfast</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>10:00</Time>
          <ScheduleItemContent>Opening Remarks</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>10:15</Time>
          <ScheduleItemContent>
            <Speaker>Alexander Pope</Speaker>
            <LinkThemed href="/speakers#popeindustries">
              OUTBREAK: index-sw-9a4c43b4b4778e7d1ca619eaaf5ac1db.js
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>10:45</Time>
          <ScheduleItemContent>
            <Speaker>Madlaina Kalunder</Speaker>
            <LinkThemed href="/speakers#anialdam">
              Building a raytracing engine with JavaScript
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
            <Speaker>Malte Ubl</Speaker>
            <LinkThemed href="/speakers#cramforce">
              Designing very large JavaScript applications
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>12:15</Time>
          <ScheduleItemContent>
            <Speaker>Tim Holman</Speaker>
            <LinkThemed href="/speakers#twholman">
              Generative Art Speedrun
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>12:45</Time>
          <ScheduleItemContent>Lunch Break</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>14:15</Time>
          <ScheduleItemContent>
            <Speaker>Nikolay Matvienko</Speaker>
            <LinkThemed href="/speakers#matvi3nko">
              Node.js applications diagnostics under the hood
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>14:45</Time>
          <ScheduleItemContent>
            <Speaker>Brittany Storoz</Speaker>
            <LinkThemed href="/speakers#brittanystoroz">
              A year of other’s bugs: the sad state of error handling
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>15:15</Time>
          <ScheduleItemContent>Sweets Break</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>15:45</Time>
          <ScheduleItemContent>
            <Speaker>Madalyn Parker</Speaker>
            <LinkThemed href="/speakers#madalynrose">
              Uncharted territory: using aXe to forge a path
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>16:15</Time>
          <ScheduleItemContent>
            <Speaker>Patricia Realini</Speaker>
            <LinkThemed href="/speakers#patriciarealini">
              "Is A Hot Dog A Sandwich?" And Other Analogies Not To Trifle With
            </LinkThemed>
          </ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>16:45</Time>
          <ScheduleItemContent>Closing Remarks</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>17:00</Time>
          <ScheduleItemContent>Family Photo</ScheduleItemContent>
        </ScheduleItem>
        <ScheduleItem>
          <Time>17:15</Time>
          <ScheduleItemContent>Party at the Meat Market</ScheduleItemContent>
        </ScheduleItem>
      </ScheduleWrapper>
    </Container>
  )
}
