import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Route, withRouter } from 'react-router-dom'
import CodeOfConductFull from './CodeOfConductFull'
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
  max-width: 70rem;
  padding: 1rem;
`

const ContentPage = ({ conference, children }) => (
  <Container>
    <Masthead {...conference} />

    <Logo src={conference.logo} />

    { children }

    <Team members={Staff} />
  </Container>
)

export default withRouter(({ conference, children, match }) => (
  <ThemeProvider theme={conference.theme}>
    <Background>
      <Route exact path={`${match.url}`} render={() => <Container>{children}</Container>}/>
      <Route path={`${match.url}/codeofconduct`} render={() => (
        <ContentPage conference={conference}>
          <CodeOfConductFull conference={conference}/>
        </ContentPage>
      )}/>
    </Background>
  </ThemeProvider>
))
