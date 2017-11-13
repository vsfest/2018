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
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid hsl(0, 0%, 90%);
  z-index: 2;

  ul {
    margin: 0;
  }

  li {
    display: inline-block;
    padding-right: 30px;
    margin: 0;
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
    border-bottom: 2px solid hsl(0, 0%, 90%);
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

const NavToggle = styled(Button)`@media (min-width: 920px) {display: none;}`

export default class Masthead extends React.Component {
  state = { navOpen: false }

  toggleNav = () => {
    this.setState(oldState => ({ navOpen: !oldState.navOpen }))
  }

  render() {
    const titoLink = this.props.titoLink
    const isCfpOpen = this.props.isCfpOpen
    const confName = this.props.title

    return (
      <div>
        <Nav>
          <StyledLink to="/">{confName}</StyledLink>
          <NavDesktop>
            <ul>
              <li>
                <StyledLink to="information">Information</StyledLink>
              </li>
              {isCfpOpen ? (
                <li>
                  <StyledLink to="call-for-speakers">
                    Become a Speaker
                  </StyledLink>
                </li>
              ) : null}
              <li>
                <StyledLink to="schedule">Schedule</StyledLink>
              </li>
              <li>
                <StyledLink to="sponsors">Sponsors</StyledLink>
              </li>
              <li>
                <StyledLink to="team">Team</StyledLink>
              </li>
            </ul>
          </NavDesktop>
          <NavToggle onClick={this.toggleNav}>Menu</NavToggle>
          <NavMobile navOpen={this.state.navOpen}>
            <ul>
              <li>
                <StyledLink to="information">Information</StyledLink>
              </li>
              {isCfpOpen ? (
                <li>
                  <StyledLink to="call-for-speakers">
                    Become a Speaker
                  </StyledLink>
                </li>
              ) : null}
              <li>
                <StyledLink to="schedule">Schedule</StyledLink>
              </li>
              <li>
                <StyledLink to="sponsors">Sponsors</StyledLink>
              </li>
              <li>
                <StyledLink to="team">Team</StyledLink>
              </li>
            </ul>
          </NavMobile>
          <ButtonThemed href={titoLink}>Tickets</ButtonThemed>
        </Nav>
      </div>
    )
  }
}
