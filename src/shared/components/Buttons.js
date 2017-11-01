import styled from 'styled-components'

const Button = styled.a`
  border: none;
  text-align: center;
  padding: 15px 30px;
  cursor: pointer;
  font-size: inherit;
  transition: all 0.2s ease-in;
  display: inline-block;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: translateY(4px);
  }
`

const ButtonThemed = Button.extend`
  background-color: ${props => props.theme.primary};
  color: white;

  &:hover,
  &:active {
    background-color: ${props => props.theme.primaryHover};
  }
`

export { ButtonThemed }
