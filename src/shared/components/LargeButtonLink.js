import styled from 'styled-components'

export default styled.a`
  margin-top: 10px;
  background: white;
  padding: 7px 15px 3px;
  border-radius: 4px;
  text-align: center;
  color: ${ props => props.theme.primary};
  width: 100%;
  
  @media (min-width: 500px) {
    width: auto;
  }
`
