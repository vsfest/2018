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
  min-height: 100vh;
  background: ${ props => props.theme.primary};
  color: white;
`

const ContentPage = ({ conference, children }) => (
  <div>
    <Masthead {...conference} />

    <Container>
      <Logo src={conference.logo} />
    </Container>

    {children}
    <Footer {...conference} />
  </div>
)

export default withRouter(({ conference, children, match }) => (
  <ThemeProvider theme={conference.theme}>
    <Background>
      <Helmet {...conference} />

      <Route exact path={`${match.url}`} render={() => <main>{children}</main>} />
      <Route path={`${match.url}/code-of-conduct`} render={() => (
        <ContentPage conference={conference}>
          <CodeOfConductFull conference={conference} />
        </ContentPage>
      )} />
      <Route path={`${match.url}/call-for-speakers`} render={() => (
        <ContentPage conference={conference}>
          <CallForSpeakers conference={conference} />
        </ContentPage>
      )} />
    <Route path={`${match.url}/team`} render={() => (
        <ContentPage conference={conference}>
          <Team members={Staff} />
        </ContentPage>
      )} />
    </Background>
  </ThemeProvider>
))
