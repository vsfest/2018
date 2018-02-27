import styled from 'styled-components'

const Button = styled.button`
  border: none;
  text-align: center;
  padding: 15px 30px;
  cursor: pointer;
  font-size: inherit;
  transition: all 0.2s ease-in;
  display: inline-block;
  text-decoration: none;
  border-radius: 0;

  &:focus {
    outline: none;
  }
`

const ButtonThemed = Button.extend`
  background-color: ${props => props.theme.primary};
  color: white;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    transform: translateY(4px);
  }

  &:hover,
  &:active {
    background-color: ${props => props.theme.primaryHover};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${props => props.theme.secondary};
  }
`

export { Button, ButtonThemed }
