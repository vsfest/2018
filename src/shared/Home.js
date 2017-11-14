import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { Route, withRouter } from 'react-router-dom'
import CodeOfConductFull from './CodeOfConductFull'
import Sponsors from './Sponsors'
import Accessibility from './Accessibility'
import CallForSpeakers from './CallForSpeakers'
import Scholarship from './Scholarship'
import Team from './Team'
import { Staff } from '../data'
import Masthead from './Masthead'
import Logo from './Logo'
import Footer from '../shared/Footer'
import Container from '../shared/components/Container'
import { SectionBanner } from '../shared/components/Section'
import EventInfo from '../shared/EventInfo'

const Background = styled.div`
  background-color: #fff;
  color: #222;
  padding-top: 50px;
`

const EventMeta = styled.section`
  text-align: center;
  margin-bottom: 30px;

  p {
    margin-bottom: 0;
  }
`

const ContentPage = ({ conference, children }) => (
  <div>
    <Masthead {...conference} />

    <SectionBanner>
      <Container>
        <Logo src={conference.logo} />
      </Container>
    </SectionBanner>

    {children}
    <Footer {...conference} />
  </div>
)

export default withRouter(({ conference, children, match }) => (
  <ThemeProvider theme={conference.theme}>
    <Background>
      <Helmet {...conference}>
        <link
          rel="preload"
          href={require('../assets/fonts/MaisonNeue-Book.woff2')}
          as="font"
          type="font/woff"
          crossorigin
        />
        <link
          rel="preload"
          href={require('../assets/fonts/MaisonNeue-ExtraBold.woff2')}
          as="font"
          type="font/woff"
          crossorigin
        />
      </Helmet>

      <Route exact path="/" render={() => <main>{children}</main>} />
      <Route
        path="/code-of-conduct"
        render={() => (
          <ContentPage conference={conference}>
            <CodeOfConductFull conference={conference} />
          </ContentPage>
        )}
      />
      <Route
        path="/call-for-speakers"
        render={() => (
          <ContentPage conference={conference}>
            <CallForSpeakers conference={conference} />
          </ContentPage>
        )}
      />
      <Route
        path="/team"
        render={() => (
          <ContentPage conference={conference}>
            <Team members={Staff} />
          </ContentPage>
        )}
      />
      <Route
        path="/sponsors"
        render={() => (
          <ContentPage conference={conference}>
            <Sponsors conference={conference} />
          </ContentPage>
        )}
      />
      <Route
        path="/accessibility"
        render={() => (
          <ContentPage conference={conference}>
            <Accessibility conference={conference} />
          </ContentPage>
        )}
      />
      <Route
        path="/scholarship"
        render={() => (
          <ContentPage conference={conference}>
            <Scholarship conference={conference} />
          </ContentPage>
        )}
      />
    </Background>
  </ThemeProvider>
))
