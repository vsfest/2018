import styled from 'styled-components'

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    text-decoration: underline;
  }
`

const LinkThemed = Link.extend`
  color: ${ props => props.theme.primaryContrast};
`

const LinkMono = Link.extend`
  color: ${ props => props.theme.secondary};
  
  &:hover {
    color: white;
    text-decoration: none;
  }
`

export {LinkThemed, LinkMono}