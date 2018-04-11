import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { Button, ButtonThemed } from './components/Buttons'
import { LinkThemed } from './components/Links'

const StyledLink = LinkThemed.withComponent(Link)

const Nav = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 0 20px 0 hsla(0, 0%, 0%, 0.2);
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  ul {
    margin: 0;
  }

  li {
    display: inline-block;
    padding-right: 30px;
    margin: 0;
  }

  ${ButtonThemed} {
    @media (max-width: 460px) {
      display: none;
    }
  }
`

const NavMobile = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  width: 100%;
  text-align: center;

  @media (min-width: 921px) {
    display: none;
  }

  li {
    display: block;
    padding: 15px 0;
    border-bottom: 2px solid ${props => props.theme.secondary};

    &:last-child {
      border: none;
    }
  }

  ul {
    display: none;
  }

  ${props =>
    props.navOpen &&
    css`
      ul {
        display: block;
      }
    `};
`

const NavDesktop = styled.nav`
  display: none;
  @media (min-width: 920px) {
    display: block;
  }
`

const NavToggle = styled(Button)`
  @media (min-width: 920px) {
    display: none;
  }
  @media (max-width: 460px) {
    padding-right: 30px;
  }
`

export default class Masthead extends React.Component {
  state = { navOpen: false }

  toggleNav = () => {
    this.setState(oldState => ({ navOpen: !oldState.navOpen }))
  }

  render() {
    const titoLink = this.props.titoLink
    const confName = this.props.title
    const { hasSpeakers, hasSchedule, hasWorkshops, soldOut } = this.props

    return (
      <div>
        <Nav>
          <StyledLink to="/">{confName}</StyledLink>
          <NavDesktop>
            <ul>
              <li>
                <StyledLink to="information">Information</StyledLink>
              </li>
              {hasSpeakers ? (
                <li>
                  <StyledLink to="speakers">Speakers</StyledLink>
                </li>
              ) : null}
              {hasWorkshops ? (
                <li>
                  <StyledLink to="workshops">Workshops</StyledLink>
                </li>
              ) : null}
              {hasSchedule ? (
                <li>
                  <StyledLink to="schedule">Schedule</StyledLink>
                </li>
              ) : null}
              <li>
                <StyledLink to="code-of-conduct">Code of Conduct</StyledLink>
              </li>
              <li>
                <StyledLink to="sponsors">Sponsors</StyledLink>
              </li>
            </ul>
          </NavDesktop>
          <NavToggle onClick={this.toggleNav}>Menu</NavToggle>
          <NavMobile navOpen={this.state.navOpen}>
            <ul>
              <li>
                <StyledLink to="information">Information</StyledLink>
              </li>
              {hasSpeakers ? (
                <li>
                  <StyledLink to="speakers">Speakers</StyledLink>
                </li>
              ) : null}
              {hasWorkshops ? (
                <li>
                  <StyledLink to="workshops">Workshops</StyledLink>
                </li>
              ) : null}
              {hasSpeakers ? (
                <li>
                  <StyledLink to="schedule">Schedule</StyledLink>
                </li>
              ) : null}
              <li>
                <StyledLink to="code-of-conduct">Code of Conduct</StyledLink>
              </li>
              <li>
                <StyledLink to="sponsors">Sponsors</StyledLink>
              </li>
            </ul>
          </NavMobile>
          {soldOut ? (
            <ButtonThemed disabled>Sold Out</ButtonThemed>
          ) : (
            <ButtonThemed>
              <a href={titoLink}>Tickets</a>
            </ButtonThemed>
          )}
        </Nav>
      </div>
    )
  }
}
