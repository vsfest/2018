import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { Route, withRouter } from 'react-router-dom'
import CodeOfConductFull from './CodeOfConductFull'
import CallForSpeakers from './CallForSpeakers'
import { Staff } from '../data'
import Masthead from './Masthead'
import Logo from './Logo'
import Team from './Team'

const Background = styled.div`
  min-height: 100vh;

  background: ${ props => props.theme.primary};
  color: white;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  padding: 1rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > * {
    margin-bottom: 4rem;
  }
`

const ContentPage = ({ conference, children }) => (
  <Container>
    <Masthead {...conference} />

    <Logo src={conference.logo} />

    {children}

    <Team members={Staff} />
  </Container>
)

export default withRouter(({ conference, children, match }) => (
  <ThemeProvider theme={conference.theme}>
    <Background>
      <Helmet {...conference} />

      <Route exact path={`${match.url}`} render={() => <Container>{children}</Container>} />
      <Route path={`${match.url}/codeofconduct`} render={() => (
        <ContentPage conference={conference}>
          <CodeOfConductFull conference={conference} />
        </ContentPage>
      )} />
      <Route path={`${match.url}/call-for-speakers`} render={() => (
        <ContentPage conference={conference}>
          <CallForSpeakers conference={conference} />
        </ContentPage>
      )} />
    </Background>
  </ThemeProvider>
))
