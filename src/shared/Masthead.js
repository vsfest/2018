import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ButtonThemed } from './components/Buttons'
import Container from './components/Container'

const Nav = styled.div`
  ul {
    margin: 0;
  }

  li {
    display: inline-block;
    padding-right: 15px;
    margin: 0;

    @media (min-width: 48em) {
      padding-right: 30px;
    }

    a {
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      color: ${props => props.theme.primary};

      &:focus {
        outline: none;
      }

      &:hover {
        color: ${props => props.theme.primaryHover};
      }
    }
  }
`

const NavMobile = styled.nav`
  border-bottom: 2px solid ${props => props.theme.secondary};

  @media (min-width: 48em) {
    display: none;
  }

  ul {
    display: none;
  }

  li {
    display: block;
    padding: 15px 30px;
    margin: 0;
    border-top: 2px solid ${props => props.theme.secondary};
  }

  &.nav-isOpen ul {
    display: block;
  }
`

const NavDesktop = styled.nav`
  border-bottom: 2px solid ${props => props.theme.secondary};
  padding-bottom: 15px;

  @media (max-width: 30em) {
    text-align: center;
  }

  @media (min-width: 30em) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 47.99em) {
    display: none;
  }
`

const Wrapper = styled.div`font-size: 18px;`

const NavToggle = styled.button`
  padding: 15px 0;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  background-color: #fafafa;
  border: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export default class Masthead extends React.Component {
  constructor(props) {
    super(props)
    this.toggleNav = this.toggleNav.bind(this)
    this.state = {
      navOpen: false
    }
  }

  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }

  render() {
    const sponsorship = this.props.contact.sponsorship
    const titoLink = this.props.titoLink
    const isCfpOpen = this.props.isCfpOpen

    return (
      <Wrapper>
        <Nav>
          <Container>
            <NavDesktop>
              <ul>
                {isCfpOpen ? (
                  <li>
                    <Link to="call-for-speakers">Call for Speakers</Link>
                  </li>
                ) : null}
                <li>
                  <a href={`mailto:${sponsorship}`}>Sponsor</a>
                </li>
                <li>
                  <Link to="code-of-conduct">Code of Conduct</Link>
                </li>
              </ul>
              <ButtonThemed href={titoLink}>Get a Ticket</ButtonThemed>
            </NavDesktop>
          </Container>
          <NavMobile className={this.state.navOpen ? 'nav-isOpen' : null}>
            <NavToggle onClick={this.toggleNav}>Menu</NavToggle>
            <ul>
              <li>
                <Link to="call-for-speakers">Call for Speakers</Link>
              </li>
              <li>
                <a href={`mailto:${sponsorship}`}>Sponsor</a>
              </li>
              <li>
                <Link to="code-of-conduct">Code of Conduct</Link>
              </li>
              <li>
                <Link to={titoLink}>Get a Ticket</Link>
              </li>
            </ul>
          </NavMobile>
        </Nav>
      </Wrapper>
    )
  }
}
