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
  }
  
  a {
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    color: ${ props => props.theme.primaryContrast};
    
    &:focus {
      outline: none;
    }
    
    &:hover {
      text-decoration: underline;
      color: ${ props => props.theme.primaryHover};
    }
  }
`

const NavMobile = styled.nav`
  @media (min-width: 48em) {
    display: none;
  }

  ul {
    display: none;  
  }
  
  li {
    display: block;
    padding: 10px 15px;
    margin: 0;
    border-top: 1px solid rgba(0,0,0,.1);
  }
  
  &.nav-isOpen ul {
    display: block;
    margin-top: 15px;
  }
`

const NavDesktop = styled.nav`

  @media (max-width: 30em) {
    text-align: center;
  }

  @media (min-width: 30em) {
    display: flex;
    align-items: center;
    justify-content: space-between;  
  }

  @media (max-width: 47em) {
    display: none;
  }
`

const Wrapper = styled.div`
  padding: 15px 0;
  background-color: white;
  font-size: 16px;
`

const NavToggle = styled.button`
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: 16px;
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
    
    return (
      <Wrapper>
        <Nav>
          <Container>
            <NavDesktop>
              <ul>
                <li><Link to='call-for-speakers'>Call for Speakers</Link></li>
                <li><a href={`mailto:${sponsorship}`}>Sponsor</a></li>
                <li><Link to='code-of-conduct'>Code of Conduct</Link></li>
              </ul>
              <ButtonThemed href={titoLink}>Get a Ticket</ButtonThemed>
            </NavDesktop>
          </Container>
          <NavMobile className={this.state.navOpen ? 'nav-isOpen' : null}>
            <NavToggle onClick={this.toggleNav}>Menu</NavToggle>
            <ul>
              <li><Link to='call-for-speakers'>Call for Speakers</Link></li>
              <li><a href={`mailto:${sponsorship}`}>Sponsor</a></li>
              <li><Link to='code-of-conduct'>Code of Conduct</Link></li>
              <li><Link to={titoLink}>Get a Ticket</Link></li>
            </ul>
          </NavMobile>
        </Nav>
      </Wrapper>
    )
  }
}