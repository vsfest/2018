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
  color: hsla(0, 0%, 67%, 1);

  &:hover {
    color: hsla(0, 0%, 87%, 1);
  }
`

export { LinkThemed, LinkGreyed }
