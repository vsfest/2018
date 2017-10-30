import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ButtonThemed } from './components/Buttons'
import Container from './components/Container'
import { LinkThemed } from './components/Links'

const Nav = styled.div`
  color: #222;
  
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

const Button = styled.button`
  border: none;
  background-color: ${ props => props.theme.primary};
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  
  @media (max-width: 30em) {
    width: 100%;
    margin-top: 15px;  
  }
  
  &:hover,
  &:active {
    background-color: ${ props => props.theme.primaryHover};
    transform: translateY(4px);
  }
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
    const team = this.props.contact.team
    const sponsorship = this.props.contact.sponsorship
    const titoLink = this.props.titoLink
    
    return (
      <Wrapper>
        <Nav>
          <Container>
            <NavDesktop>
              <ul>
                <li><Link to='call-for-speakers' passHref><LinkThemed>Call for Speakers</LinkThemed></Link></li>
                <li><LinkThemed href={`mailto:${sponsorship}`}>Sponsor</LinkThemed></li>
                <li><Link to='code-of-conduct' passHref><LinkThemed>Code of Conduct</LinkThemed></Link></li>
              </ul>
              <ButtonThemed href={titoLink}>Get a Ticket</ButtonThemed>
            </NavDesktop>
          </Container>
          <NavMobile className={this.state.navOpen ? 'nav-isOpen' : null}>
            <NavToggle onClick={this.toggleNav}>Menu</NavToggle>
            <ul>
              <li><Link to='call-for-speakers' passHref><LinkThemed>Call for Speakers</LinkThemed></Link></li>
              <li><LinkThemed href={`mailto:${sponsorship}`} passHref>Sponsor</LinkThemed></li>
              <li><Link to='code-of-conduct' passHref><LinkThemed>Code of Conduct</LinkThemed></Link></li>
              <li><Link to={titoLink} passHref><LinkThemed>Get a Ticket</LinkThemed></Link></li>
            </ul>
          </NavMobile>
        </Nav>
      </Wrapper>
    )
  }
}