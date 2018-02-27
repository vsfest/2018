import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import CodeOfConductFull from './CodeOfConductFull'
import Sponsors from './Sponsors'
import Accessibility from './Accessibility'
import CallForSpeakers from './CallForSpeakers'
import Scholarship from './Scholarship'
import Information from './Information'
import Speakers from './Speakers'
import Workshops from './Workshops'
import Team from './Team'
import { Staff } from '../data'
import Masthead from './Masthead'
import Logo from './Logo'
import Footer from '../shared/Footer'
import Container from '../shared/components/Container'
import NewsPage from '../shared/NewsPage'
import { SectionBanner } from '../shared/components/Section'
import ScheduleCSS from '../shared/ScheduleCSS'
import ScheduleJS from '../shared/ScheduleJS'
import ScheduleDecompress from '../shared/ScheduleDecompress'

const Background = styled.div`
  background-color: #fff;
  color: #222;
  padding-top: 50px;
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

const renderSchedule = (conference) => {
  if (conference.id === 'css') {
    return (
      <ScheduleCSS conference={conference} />
    )
  } else if (conference.id === 'js') {
    return (
      <ScheduleJS conference={conference} />
    )
  } else if (conference.id === 'decompress') {
    return (
      <ScheduleDecompress conference={conference} />
    )
  } else {
    return (
      <Redirect to={'/'}/>
    )
  }
}

export default withRouter(({ conference, children, match }) => (
  <ThemeProvider theme={{ ...conference.theme, _conference: conference }}>
    <Background>
      <Helmet {...conference}>
        <title>{conference.title}</title>
        <link rel="icon" href={conference.favicon} />
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

      <Switch>
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
              <Team members={Staff} conference={conference} />
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
        <Route
          path="/information"
          render={() => (
            <ContentPage conference={conference}>
              <Information conference={conference} />
            </ContentPage>
          )}
        />
        <Route
          path="/speakers"
          render={() => (
            <ContentPage conference={conference}>
              <Speakers conference={conference} />
            </ContentPage>
          )}
        />
        {conference.workshops && <Route
          path="/workshops"
          render={() => (
            <ContentPage conference={conference}>
              <Workshops conference={conference} />
            </ContentPage>
          )}
        />}
        <Route
          path="/schedule"
          render={() => (
            <ContentPage conference={conference}>
              {renderSchedule(conference)}
            </ContentPage>
          )}
        />
        { conference.news.map((item,i) => (
          <Route key={i} exact path={item.url} render={() => (
            <ContentPage conference={conference}>
              <NewsPage conference={conference} />
            </ContentPage>
          )}/>
        ))}
        <Route
          render={() => (
            // Redirect to home instead of showing a blank white page
            <Redirect to={'/'}/>
          )}
        />
      </Switch>
    </Background>
  </ThemeProvider>
))
