import React from 'react'
import styled from 'styled-components'

import Headline from './components/Headline'
import HeadlineSmall from './components/HeadlineSmall'
import Copy from './components/Copy'
import { LinkThemed } from './components/Links'
import { SectionCentered } from './components/Section'

const SponsorContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
  flex-wrap: wrap;
`

const Sponsor = styled.div`
  &:not(:only-child) {
    @media (min-width: 768px) {
      margin-right: 20px;
    }
  }

  a {
    display: table;
    ${props => (props.tier === 'main' ? 'padding: 30px;' : 'padding: 25px;')};
    margin-bottom: 20px;
    justify-content: center;
    background-color: ${props => props.theme.secondary};
    vertical-align: middle;

    @media (max-width: 768px) {
      width: 100%;
    }

    &:hover {
      img {
        opacity: 0.5;
      }
    }

    &.titleSponsor {
      padding: 40px;

      img {
        height: 80px;
      }
    }
  }

  img {
    ${props => (props.tier === 'main' ? 'height: 50px;' : 'height: 30px;')};
    max-width: 100%;
    display: table-cell;

    @media (max-width: 768px) {
      margin: 0 auto;
    }
  }
`

export default ({ sponsors, contact }) => {
  const communitySponsors = sponsors.filter(
    sponsor => sponsor.tier === 'community'
  )

  const supporterSponsors = sponsors.filter(
    sponsor => sponsor.tier === 'supporter'
  )

  const diversitySponsors = sponsors.filter(
    sponsor => sponsor.tier === 'diversity'
  )

  const titleSponsor = sponsors.filter(sponsor => sponsor.tier === 'title')

  const mainSponsors = sponsors.filter(sponsor => sponsor.tier === 'main')

  const mediaPartners = sponsors.filter(sponsor => sponsor.tier === 'media')

  const travelSponsors = sponsors.filter(sponsor => sponsor.tier === 'travel')

  return (
    <div>
      <Headline>Sponsors</Headline>

      <Copy>
        We are currently offering sponsorship packages and media partnerships.{' '}
        <LinkThemed href={`mailto:${contact.sponsorship}`}>
          Contact us for more details
        </LinkThemed>. Thanks to these great companies already supporting us:
      </Copy>

      <SectionCentered>
        {titleSponsor.length ? (
          <HeadlineSmall>Title Sponsor</HeadlineSmall>
        ) : null}
        <SponsorContainer>
          {titleSponsor.map((sponsor, i) => {
            return (
              <Sponsor key={i} {...sponsor}>
                <a href={sponsor.url} className="titleSponsor">
                  <img src={sponsor.image} alt={sponsor.name} />
                </a>
              </Sponsor>
            )
          })}
        </SponsorContainer>
      </SectionCentered>

      <SectionCentered>
        {mainSponsors.length ? (
          <HeadlineSmall>Main Sponsors</HeadlineSmall>
        ) : null}
        <SponsorContainer>
          {mainSponsors.map((sponsor, i) => {
            return (
              <Sponsor key={i} {...sponsor}>
                <a href={sponsor.url}>
                  <img src={sponsor.image} alt={sponsor.name} />
                </a>
              </Sponsor>
            )
          })}
        </SponsorContainer>

        {supporterSponsors.length ? (
          <HeadlineSmall>Supporter Sponsors</HeadlineSmall>
        ) : null}
        <SponsorContainer>
          {supporterSponsors.map((sponsor, i) => {
            return (
              <Sponsor key={i} {...sponsor}>
                <a href={sponsor.url}>
                  <img src={sponsor.image} alt={sponsor.name} />
                </a>
              </Sponsor>
            )
          })}
        </SponsorContainer>

        {communitySponsors.length ? (
          <HeadlineSmall>Community Sponsors</HeadlineSmall>
        ) : null}
        <SponsorContainer>
          {communitySponsors.map((sponsor, i) => {
            return (
              <Sponsor key={i} {...sponsor}>
                <a href={sponsor.url}>
                  <img src={sponsor.image} alt={sponsor.name} />
                </a>
              </Sponsor>
            )
          })}
        </SponsorContainer>

        {diversitySponsors.length ? (
          <HeadlineSmall>Diversity Sponsors</HeadlineSmall>
        ) : null}
        <SponsorContainer>
          {diversitySponsors.map((sponsor, i) => {
            return (
              <Sponsor key={i} {...sponsor}>
                <a href={sponsor.url}>
                  <img src={sponsor.image} alt={sponsor.name} />
                </a>
              </Sponsor>
            )
          })}
        </SponsorContainer>

        {travelSponsors.length ? (
          <HeadlineSmall>Speaker Travel Sponsors</HeadlineSmall>
        ) : null}
        <SponsorContainer>
          {travelSponsors.map((sponsor, i) => {
            return (
              <Sponsor key={i} {...sponsor}>
                <a href={sponsor.url}>
                  <img src={sponsor.image} alt={sponsor.name} />
                </a>
              </Sponsor>
            )
          })}
        </SponsorContainer>

        {mediaPartners.length ? (
          <div>
            <HeadlineSmall>Media Partners</HeadlineSmall>
            <p>
              We’re always happy to work with media partners. If you run a
              magazine, podcast, blog or a newsletter{' '}
              <LinkThemed href={`mailto:${contact.sponsorship}`}>
                drop us a line
              </LinkThemed>{' '}
              for options.
            </p>
          </div>
        ) : null}
        <SponsorContainer>
          {mediaPartners.map((sponsor, i) => {
            return (
              <Sponsor key={i} {...sponsor}>
                <a href={sponsor.url}>
                  <img src={sponsor.image} alt={sponsor.name} />
                </a>
              </Sponsor>
            )
          })}
        </SponsorContainer>
      </SectionCentered>
    </div>
  )
}
