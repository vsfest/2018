import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { Route, withRouter } from 'react-router-dom'
import CodeOfConductFull from './CodeOfConductFull'
import CallForSpeakers from './CallForSpeakers'
import Team from './Team'
import { Staff } from '../data'
import Masthead from './Masthead'
import Logo from './Logo'
import Footer from '../shared/Footer'
import Container from '../shared/components/Container'

const Background = styled.div`
  background-color: #fafafa;
  color: #222;
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

    <Container>
      <Logo src={conference.logo} />
      <EventMeta>
        <p>{conference.date}</p>
        <p>{conference.venue}</p>
      </EventMeta>
    </Container>

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
          href={require('../assets/fonts/Maison-Neue-Book.woff')}
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
    </Background>
  </ThemeProvider>
))
