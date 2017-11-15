import React from 'react'
import { Link } from 'react-router-dom'

import Headline from './components/Headline'
import HeadlineSmall from './components/HeadlineSmall'
import Title from './components/Title'
import Container from '../shared/components/Container'
import { LinkThemed } from './components/Links'
import Copy from './components/Copy'
import { ButtonThemed } from './components/Buttons'

const StyledLink = LinkThemed.withComponent(Link)

export default ({ conference }) => {
  return (
    <Container>
      <Headline>Venue</Headline>
      <p>
        Meat Market<br /> 5 Blackwood Street<br /> North Melbourne VIC 3051
        <br />Australia
      </p>
      <p>
        {conference.title} will take place on {conference.date} at North
        Melbourne Meat Market. Build in the 1880s; the Meat Market is a
        heritage-listed building, previously home to butchers, now house to
        countless cultural and arts events.
      </p>
      <p>
        The Meat Market is conveniently located within 3-5 minutes walk from
        trams (19, 58, 59) and buses (401, 402, 403). There’s no public parking
        available. The surrounding area has a limited permit, metered and timed
        on-street parking. Alternatively, there’s{' '}
        <LinkThemed href="https://secureaspot.secureparking.com.au/?Place=14%20-%2020%20Blackwood%20St,%20&Cpn=800319&Lat=-37.8017663636881&Lon=144.954862131877&Promo=MEATMARKET17">
          a secure parking
        </LinkThemed>{' '}
        opposite of the venue that can be booked online (use MEATMARKET17 code
        for a discount).
      </p>
      <Copy>
        The venue is wheelchair accessible (read more in our{' '}
        <StyledLink to="accessibility">Accessibility Statement</StyledLink>).
      </Copy>

      <Headline>Travel and Transport</Headline>
      <HeadlineSmall>Melbourne Airport</HeadlineSmall>
      <p>
        Melbourne has one airport, known as the{' '}
        <LinkThemed href="http://melbourneairport.com.au/">
          Tullamarine Airport
        </LinkThemed>, located ~20 kilometers north-west of the city center. The
        most convenient way to get into the city is:
      </p>
      <ul>
        <li>Taxi or Uber ($50-$70 one way)</li>
        <li>
          <LinkThemed href="https://www.skybus.com.au/">SkyBus</LinkThemed> ($19
          one way per person, runs every 10 minutes, 24/7)
        </li>
      </ul>
      <p>
        The most affordable option is{' '}
        <LinkThemed href="https://www.ptv.vic.gov.au/">
          Public Transport Victoria
        </LinkThemed>{' '}
        buses and trains, requiring at least one connection (bus to Broadmeadows
        connecting to the Craigieburn line to the city, $4.10 for a one way Zone
        1/2 ticket).
      </p>

      <HeadlineSmall>Public Transport</HeadlineSmall>
      <p>
        Melbourne’s trains, trams, and buses are operated by Public Transport
        Victoria. To travel, it’s necessary to obtain a reusable{' '}
        <LinkThemed href="https://www.ptv.vic.gov.au/tickets/myki">
          myki card
        </LinkThemed>{' '}
        ($6 per card at full fare) and top it up. It’s essential to touch on and
        off the myki card as you board and disembark public transport vehicles.
        Alternatively, it’s possible to purchase a{' '}
        <LinkThemed href="https://www.ptv.vic.gov.au/tickets/myki/buy-a-myki/myki-explorer/">
          myki Explorer pass
        </LinkThemed>{' '}
        ($15 and includes $9 myki Money for travel) that includes special offers
        and discounts for tourist attractions.
      </p>
      <p>
        Melbourne’s CBD is covered by the{' '}
        <LinkThemed href="https://www.ptv.vic.gov.au/tickets/fares/zones/#FTZ">
          Free Tram Zone
        </LinkThemed>, which means there’s no need for a ticket if traveling
        exclusively within its borders.{' '}
        <LinkThemed href="https://static.ptv.vic.gov.au/siteassets/PDFs/Maps/Network-maps/PTV_FreeTramZone_Map.pdf">
          See the map &rarr;
        </LinkThemed>
      </p>

      <HeadlineSmall>Cycling</HeadlineSmall>
      <p>
        Melbourne is a bike-friendly city, boasting over 135 km of on- and
        off-road routes. There are multiple bike rental places as well as public
        bicycle schemes such as{' '}
        <LinkThemed href="https://www.melbournebikeshare.com.au/">
          Melbourne Bike Share
        </LinkThemed>{' '}
        ($3 a day for unlimited 30-min rides) or dockless{' '}
        <LinkThemed href="https://www.o.bike/">oBike</LinkThemed> ($1.99 for 30
        minutes, unlockable via an app).
      </p>
      <p>Bear in mind that riding without a helmet is illegal in Australia.</p>
      <HeadlineSmall>Taxis</HeadlineSmall>
      <Copy>
        There are{' '}
        <LinkThemed href="http://taxi.vic.gov.au/passengers/taxi-passengers/catching-a-taxi/taxi-companies">
          numerous Taxi companies
        </LinkThemed>{' '}
        operating in Melbourne. You can usually hail one in CBD, but it becomes
        harder the further you go.{' '}
        <LinkThemed href="https://www.uber.com/en-AU/">Uber</LinkThemed> is
        generally cheaper and more convenient.
      </Copy>

      <Headline>Accommodation</Headline>
      <p>
        March, the first month of Autumn, is a fairly popular month to visit
        Melbourne as the temperatures decrease after a hot summer. Due to the
        vicinity of Easter and the F1 Grand Prix, it’s advised to book
        accommodation as soon as possible.
      </p>
      <p>
        There are a few hotels nearby the venue (15-20min walk), which you might
        want to consider:
      </p>
      <ul>
        <li>
          <LinkThemed href="http://www.jasperhotel.com.au/">
            Jasper Hotel
          </LinkThemed>
        </li>
        <li>
          <LinkThemed href="https://www.jazzcornerhotel.com/">
            The Jazz Corner Hotel
          </LinkThemed>
        </li>
        <li>
          <LinkThemed href="https://www.radisson.com/melbourne-hotel-vi-3000/ausmelb">
            Radisson on Flagstaff Gardens
          </LinkThemed>
        </li>
        <li>
          <LinkThemed href="http://www.mercure.com/gb/hotel-9376-mercure-melbourne-therry-street/index.shtml">
            Mercure Melbourne Therry Street
          </LinkThemed>
        </li>
        <li>
          <LinkThemed href="http://www.ibismelbourne.com.au/">
            ibis Melbourne Hotel and Apartments
          </LinkThemed>
        </li>
      </ul>
      <p>
        There are much more hotels further into CBD available on{' '}
        <LinkThemed href="http://booking.com/">Booking.com</LinkThemed>.
        Alternatively, consider private accommodation through{' '}
        <LinkThemed href="http://airbnb.com/">AirBnB</LinkThemed>.
      </p>
    </Container>
  )
}
