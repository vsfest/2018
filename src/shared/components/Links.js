import styled from 'styled-components'

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:focus {
    outline: none;
  }
`

const LinkThemed = Link.extend`
  color: ${props => props.theme.primary};

  &:hover {
    color: ${props => props.theme.primaryHover};
  }
`

const LinkGreyed = Link.extend`
  color: hsl(0, 0%, 35%);

  &:hover {
    color: hsl(0, 0%, 15%);
  }
`

export { LinkThemed, LinkGreyed }
