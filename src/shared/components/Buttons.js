import styled from 'styled-components'

const Button = styled.button`
  border: none;
  text-align: center;
  padding: 15px 30px;
  cursor: pointer;
  font-size: inherit;
  border-radius: 3px;
  transition: all 0.2s ease-in;
  display: inline-block;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    transform: translateY(4px);
  }
`

const ButtonThemed = Button.extend`
  background-color: ${ props => props.theme.primary};
  color: white;
  
  &:hover,
  &:active {
    background-color: ${ props => props.theme.primaryHover};
  }
`

const ButtonMono = Button.extend`
  background-color: white;
  color: ${ props => props.theme.primary};
  
  &:hover {
    background-color: #f3f3f3;
  }
`

export {ButtonThemed, ButtonMono}